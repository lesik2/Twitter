import { TweetForm } from '@components/TweetForm';
import { Header } from '@components/Header/index';
import { Tweet } from '@components/Tweet';

import { HomeSection } from './styled';
import { useGetTweets } from './hooks/useGetTweets';

import { TweetsWrapper } from '../Profile/styled';

export function Home() {
  const tweetsData = useGetTweets();

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
