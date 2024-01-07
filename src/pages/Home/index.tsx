import { TweetForm } from '@components/TweetForm';
import { ITweetComponent } from '@customTypes/index';
import { useEffect, useState } from 'react';
import { getTweetsForAllUsers } from '@db/tweetsForAllUsers';
import { Header } from '@components/Header/index';
import { Tweet } from '@components/Tweet';

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
      getTweetsForAllUsers(uid)
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
        <TweetsWrapper data-cy='home-tweets-wrapper'>
          {tweetsData.length > 0 && tweetsData.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
        </TweetsWrapper>
      </HomeSection>
    </>
  );
}
