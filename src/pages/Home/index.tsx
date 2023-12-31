import { TweetForm } from '@components/TweetForm';
import { ITweetComponent, Tweet } from '@components/Tweet';
import { useEffect, useState } from 'react';
import { getTweetsWithForAllUsers } from '@db/tweetsForAllUsers';
import { Header } from '@components/Header/index';

import { HomeSection } from './styled';

import { TweetsWrapper } from '../Profile/styled';

import { useAppSelector } from '@//hooks/redux';

export function Home() {
  const user = useAppSelector((state) => state.userReducer);
  const tweets = useAppSelector((state) => state.tweetsReducer.tweets);
  const [tweetsData, setTweetsData] = useState<ITweetComponent[]>([]);

  useEffect(() => {
    const { uid } = user;
    if (uid) {
      getTweetsWithForAllUsers(uid)
        .then((allTweets) => {
          setTweetsData(allTweets);
        })
        .catch((error) => console.error(error));
    }
  }, [tweets, user]);

  return (
    <>
      <HomeSection>
        <Header />
        <TweetForm />
        <TweetsWrapper>
          {tweetsData.length > 0 && tweetsData.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
        </TweetsWrapper>
      </HomeSection>
    </>
  );
}
