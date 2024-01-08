import { TweetForm } from '@components/TweetForm';
import { useAppSelector } from '@hooks/redux';
import { Tweet } from '@components/Tweet';
import { getFormatDate } from '@utils/date';

import { Header } from './components/Header';
import { ProfileSection, TweetsTitle, TweetsWrapper } from './styled';

export function Profile() {
  const user = useAppSelector((state) => state.userReducer);
  const tweetState = useAppSelector((state) => state.tweetsReducer);

  return (
    <>
      <ProfileSection>
        <Header />
        <TweetForm />
        <TweetsTitle>Tweets</TweetsTitle>
        <TweetsWrapper data-cy='profile-tweets-wrapper'>
          {tweetState.tweets.length > 0 &&
            tweetState.tweets.map((tweet) => {
              const { text, imageUrl, timestamp, amountOfLikes, usersLikes, id } = tweet;

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
                  email={user.link ?? user.email ?? '@user'}
                  date={getFormatDate(timestamp)}
                />
              );
            })}
        </TweetsWrapper>
      </ProfileSection>
    </>
  );
}
