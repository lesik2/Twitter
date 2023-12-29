import { TweetForm } from '@components/TweetForm';
import { useAppSelector } from '@hooks/redux';
import { Tweet } from '@components/Tweet';

import { Header } from './components/Header';
import { ProfileSection, SearchSection, TweetsTitle, TweetsWrapper } from './styled';

export function Profile() {
  const user = useAppSelector((state) => state.userReducer);
  const getFormatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();

    return ` ${day} ${month}, ${year}`;
  };

  return (
    <>
      <ProfileSection>
        <Header />
        <TweetForm />
        <TweetsTitle>Tweets</TweetsTitle>
        <TweetsWrapper>
          {user.tweets.length >0 && user.tweets.map((tweet) => (
            <Tweet
              amountOfLikes={tweet.amountOfLikes}
              isLiked={tweet.usersLikes.includes(user.uid!)}
              authorId={user.uid ?? ''}
              id={tweet.id}
              key={tweet.id}
              nameUser={user.displayName ?? 'user'}
              text={tweet.text}
              image={tweet.imageUrl}
              email={user.email ?? 'user@gmail.com'}
              date={getFormatDate(tweet.timestamp)}
            />
          ))}
        </TweetsWrapper>
      </ProfileSection>
      <SearchSection>Search</SearchSection>
    </>
  );
}
