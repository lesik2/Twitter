import { useParams } from 'react-router-dom';
import { Header } from '@components/Header';
import { Tweet } from '@components/Tweet';
import { useAppSelector } from '@hooks/redux';
import { getFormatDate } from '@utils/date';

import { TweetsWrapper, UserSection } from './styled';
import { useTweet } from './hooks/useTweet';


export function TweetPage() {
  const currentUser = useAppSelector((state) => state.userReducer);
  const params = useParams();
  const [user, tweet] = useTweet(params.id ?? '');

  return (
    <UserSection>
      <Header />
      <TweetsWrapper>
        {user && tweet && (
          <Tweet
            amountOfLikes={tweet.amountOfLikes}
            isLiked={tweet.usersLikes.includes(currentUser.uid ?? '')}
            authorId={tweet.userId ?? ''}
            id={tweet.id}
            key={tweet.id}
            nameUser={user.displayName ?? 'user'}
            text={tweet.text}
            image={tweet.imageUrl}
            email={user.link ?? user.email ?? '@user'}
            date={getFormatDate(tweet.timestamp)}
          />
        )}
      </TweetsWrapper>
    </UserSection>
  );
}
