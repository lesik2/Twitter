import { TweetForm } from '@components/TweetForm';
import { useAppSelector } from '@hooks/redux';
import { Tweet } from '@components/Tweet';

import { Header } from './components/Header';
import { ProfileSection,  TweetsTitle, TweetsWrapper } from './styled';

export function Profile() {
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

  return (
    <>
      <ProfileSection>
        <Header />
        <TweetForm />
        <TweetsTitle>Tweets</TweetsTitle>
        <TweetsWrapper>
          {user.tweets.length > 0 &&
            user.tweets.map((tweet) => (
              <Tweet
                amountOfLikes={tweet.amountOfLikes}
                isLiked={tweet.usersLikes.includes(user.uid ?? '')}
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
    </>
  );
}
