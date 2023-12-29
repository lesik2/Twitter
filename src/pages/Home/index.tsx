import { TweetForm } from '@components/TweetForm';
import { useAppSelector } from '@hooks/redux';
import { Tweet } from '@components/Tweet';
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { ITweet } from '@customTypes/index';

import { Header } from './components/Header';
import { HomeSection} from './styled';

import { TweetsWrapper } from '../Profile/styled';

import { db } from '@//firebase';
import { UserState } from '@//store/reducers/userSlice';

export function Home() {
  const user = useAppSelector((state) => state.userReducer);
  const getFormatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
  
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
  
    return date.toLocaleString('en-US', options);
  };

  const [usersData, setUsersData] = useState<UserState[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollectionRef = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollectionRef);

        const userPromises = usersSnapshot.docs.map(async (userDoc) => {
          const userData: UserState = { ...(userDoc.data() as UserState) };
          const tweetsCollectionRef = collection(userDoc.ref, 'tweets');
          const tweetsSnapshot = await getDocs(tweetsCollectionRef);
          const tweetsData: ITweet[] = tweetsSnapshot.docs.map((doc) => doc.data() as ITweet);
          userData.tweets = tweetsData;


          onSnapshot(tweetsCollectionRef, (snapshot) => {
            const updatedTweetsData: ITweet[] = snapshot.docs.map((doc) => doc.data() as ITweet);
            userData.tweets = updatedTweetsData;
            setUsersData((prevUsersData) => {
              const updatedUsersData = [...prevUsersData];
              const userIndex = updatedUsersData.findIndex((userItem) => userItem.uid === userData.uid);
              if (userIndex !== -1) {
                updatedUsersData.splice(userIndex, 1);
              } else {
                updatedUsersData.unshift(userData);
              }

              return updatedUsersData;
            });
          });

          return userData;
        });

        const allTweetsData: UserState[] = await Promise.all(userPromises);
        allTweetsData.forEach((userData) => {
          userData.tweets.sort((a, b) => b.timestamp - a.timestamp);
        });
        setUsersData(allTweetsData);
      } catch (errorObj: unknown) {
        if (errorObj instanceof Error) {
          console.error(errorObj);
        }
      }
    };

    fetchUsers().catch((error) => {
      if (error instanceof Error) {
        console.error(error);
      }
    });
  }, []);

  return (
    <>
      <HomeSection>
        <Header />
        <TweetForm />
        <TweetsWrapper>
          {usersData.length > 0 &&
            usersData.map((userItem) => {
              const { email, tweets, displayName, uid } = userItem;

              return tweets.map((tweet) => (
                <Tweet
                  amountOfLikes={tweet.amountOfLikes}
                  isLiked={tweet.usersLikes.includes(user.uid ?? '')}
                  authorId={uid ?? ''}
                  id={tweet.id}
                  key={tweet.id}
                  nameUser={displayName ?? 'user'}
                  text={tweet.text}
                  image={tweet.imageUrl}
                  email={email ?? 'user@gmail.com'}
                  date={getFormatDate(tweet.timestamp)}
                />
              ));
            })}
        </TweetsWrapper>
      </HomeSection>

    </>
  );
}
