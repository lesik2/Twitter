import { useParams } from 'react-router-dom';
import backProfile from '@assets/images/backProfile.png';
import { ImageApp, ImageUser } from '@components/ui';
import defaultUser from '@assets/images/defaultUser.png';
import { Header } from '@components/Header';
import { Tweet } from '@components/Tweet';
import { useAppSelector } from '@hooks/redux';
import { getFormatDate } from '@utils/date';

import { TweetsWrapper, UserSection, UserWrapper, UserWrapperImage, WrapperImage } from './styled';
import { useUserTweets } from './hooks/useUserTweets';

export function UserPage() {
  const currentUser = useAppSelector((state) => state.userReducer);
  const params = useParams();
  const [user, tweets] = useUserTweets(params.id ?? '');

  return (
    <UserSection>
      <Header />
      <WrapperImage>
        <ImageApp src={backProfile} />
      </WrapperImage>
      <UserWrapper>
        <UserWrapperImage>
          <ImageUser alt='image of user' src={defaultUser} />
        </UserWrapperImage>
      </UserWrapper>
      <TweetsWrapper>
        {user &&
          tweets.length > 0 &&
          tweets.map((tweet) => {
            const { text, imageUrl, timestamp, amountOfLikes, usersLikes, id } = tweet;
            const { email, link, displayName, uid } = user;

            return (
              <Tweet
                amountOfLikes={amountOfLikes}
                isLiked={usersLikes.includes(currentUser.uid ?? '')}
                authorId={uid ?? ''}
                id={id}
                key={id}
                nameUser={displayName ?? 'user'}
                text={text}
                image={imageUrl}
                email={link ?? email ?? '@user'}
                date={getFormatDate(timestamp)}
              />
            );
          })}
      </TweetsWrapper>
    </UserSection>
  );
}
