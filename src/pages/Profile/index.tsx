import { TweetForm } from '@components/TweetForm';
import { useAppSelector } from '@hooks/redux';
import { Tweet } from '@components/Tweet';

import { Header } from './components/Header';
import { ProfileSection, TweetsTitle, TweetsWrapper } from './styled';

export function Profile() {
  const user = useAppSelector((state) => state.userReducer);
  const tweetState = useAppSelector((state) => state.tweetsReducer);
  const getFormatDate = (timestamp: number): string => {
    const date = new Date(timestamp);

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
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
          {tweetState.tweets.length > 0 &&
            tweetState.tweets.map((tweet) => {
              const {text, imageUrl,timestamp, amountOfLikes, usersLikes, id} = tweet;

              return (
              <Tweet
                amountOfLikes={amountOfLikes}
                isLiked={usersLikes.includes(user.uid ?? '')}
                authorId={user.uid ?? ''}
                id={id}
                key={id}
                nameUser={user.displayName ?? 'user'}
                text={text}
                image={imageUrl}
                email={user.email ?? 'user@gmail.com'}
                date={getFormatDate(timestamp)}
              />
              )
              
          })}
        </TweetsWrapper>
      </ProfileSection>
    </>
  );
}
