import defaultUser from '@assets/images/defaultUser.png';
import backProfile from '@assets/images/backProfile.png';
import { useAppSelector } from '@hooks/redux';
import { UserInfo, UserSubtitle, UserTitle } from '@components/ui/profile';
import { ImageApp } from '@components/ui';
import { CONSTANTS } from '@constants/index';

import {
  EditBtn,
  FollowAmount,
  FollowText,
  FollowWrapper,
  HeaderSection,
  ImageUser,
  MarkText,
  TweetsWrapper,
  UserDescription,
  UserInfoProfile,
  UserNameProfile,
  UserProfileWrapper,
  UserWrapper,
  UserWrapperImage,
  WrapperImage,
} from './styled';

export function Header() {
  const user = useAppSelector((state) => state.userReducer);

  return (
    <HeaderSection>
      <TweetsWrapper>
        <UserInfoProfile>
          <UserTitle>{user.displayName}</UserTitle>
          <UserSubtitle>1,070 Tweets</UserSubtitle>
        </UserInfoProfile>
      </TweetsWrapper>
      <WrapperImage>
        <ImageApp src={backProfile} />
      </WrapperImage>
      <UserWrapper>
        <UserWrapperImage>
          <ImageUser alt='image of user' src={user.photoURL ?? defaultUser} />
        </UserWrapperImage>
        <EditBtn>{CONSTANTS.PROFILE_BTN}</EditBtn>
        <UserProfileWrapper>
          <UserInfo>
            <UserNameProfile>{user.displayName}</UserNameProfile>
            <UserSubtitle>{user.email}</UserSubtitle>
          </UserInfo>
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
  );
}
