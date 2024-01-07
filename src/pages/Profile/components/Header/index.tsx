import defaultUser from '@assets/images/defaultUser.png';
import backProfile from '@assets/images/backProfile.png';
import { useAppSelector } from '@hooks/redux';
import { ImageUser, UserInfo, UserSubtitle, UserTitle } from '@components/ui/index';
import { ImageApp } from '@components/ui';
import { CONSTANTS } from '@constants/index';
import { useState } from 'react';
import { Modal } from '@components/Modal';

import {
  EditBtn,
  FollowAmount,
  FollowText,
  FollowWrapper,
  HeaderSection,
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

import { ProfileEdit } from '../ProfileEdit';

export function Header() {
  const user = useAppSelector((state) => state.userReducer);
  const tweetState = useAppSelector((state) => state.tweetsReducer);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <HeaderSection>
      <TweetsWrapper>
        <UserInfoProfile>
          <UserTitle>{user.displayName}</UserTitle>
          <UserSubtitle>{`${tweetState.tweets.length} Tweets`}</UserSubtitle>
        </UserInfoProfile>
      </TweetsWrapper>
      <WrapperImage>
        <ImageApp src={backProfile} />
      </WrapperImage>
      <UserWrapper>
        <UserWrapperImage>
          <ImageUser alt='image of user' src={defaultUser} />
        </UserWrapperImage>
        <EditBtn data-cy='edit-profile-btn' onClick={handleOpen}>{CONSTANTS.PROFILE_BTN}</EditBtn>
        <UserProfileWrapper>
          <UserInfo>
            <UserNameProfile data-cy='profile-name'>{user.displayName}</UserNameProfile>
            <UserSubtitle data-cy='profile-link'>{user.link ? user.link : user.email}</UserSubtitle>
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
      {isOpen && (
        <Modal onClose={handleClose}>
          <ProfileEdit handleClose={handleClose} />
        </Modal>
      )}
    </HeaderSection>
  );
}
