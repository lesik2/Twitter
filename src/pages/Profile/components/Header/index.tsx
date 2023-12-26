import defaultUser from '@assets/images/defaultUser.png';
import backProfile from '@assets/images/backProfile.png';
import { useAppSelector} from '@hooks/redux';
import { UserEmail } from '@components/SideBar/styled';

import { EditBtn, FollowAmount, FollowText, FollowWrapper, HeaderSection, ImageBack, ImageUser, MarkText, TweetsWrapper, UserDescription, UserInfo, UserInfoProfile, UserName, UserNameProfile, UserProfileWrapper, UserTweets, UserWrapper, UserWrapperImage, WrapperImage } from './styled';


export function Header() {
  const user = useAppSelector((state) => state.userReducer);

  return (
    <HeaderSection>
      <TweetsWrapper>
        <UserInfo>
          <UserName>
            {user.displayName}
          </UserName>
          <UserTweets>
            1,070 Tweets
          </UserTweets>
        </UserInfo>
      </TweetsWrapper>
      <WrapperImage>
        <ImageBack src={backProfile}/>
      </WrapperImage>
      <UserWrapper>
        <UserWrapperImage>
          <ImageUser alt='image of user' src={user.photoURL??defaultUser}/>
        </UserWrapperImage>
        <EditBtn>
          Edit profile
        </EditBtn>
        <UserProfileWrapper>
          <UserInfoProfile>
            <UserNameProfile>
              {user.displayName}
            </UserNameProfile>
            <UserEmail>
              {user.email}
            </UserEmail>
          </UserInfoProfile>
          <UserDescription>
            UX&UI designer at <MarkText>@abutechuz</MarkText>
          </UserDescription>
          <FollowWrapper>
            <FollowText>
              <FollowAmount>67 </FollowAmount>
              Following
            </FollowText>
            <FollowText>
              <FollowAmount>47 </FollowAmount>
              Followers
            </FollowText>
          </FollowWrapper>
        </UserProfileWrapper>
      </UserWrapper>
    </HeaderSection>
  )
}
