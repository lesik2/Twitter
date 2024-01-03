import { APP_LINKS } from '@constants/sideBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import defaultUser from '@assets/images/defaultUser.png';
import { ROUTES, CONSTANTS } from '@constants/index';
import { auth } from '@db/index';
import { removeUser } from '@store/reducers/userSlice';
import twitter from '@assets/icons/twitter.svg';
import { useState } from 'react';
import { clearTweets } from '@store/reducers/tweetsSlice';

import {
  Aside,
  Icon,
  TextLink,
  LogOutBtn,
  Navigation,
  TweetBtn,
  UserName,
  UserWrapper,
  Wrapper,
  WrapperLink,
  TweetWrapper,
  SideBarIconTwitter,
} from './styled';

import { UserInfo, UserSubtitle, ImageUser, ImageUserWrapper } from '../ui/index';
import { Modal } from '../Modal';
import { TweetForm } from '../TweetForm';

export function SideBar() {
  const user = useAppSelector((state) => state.userReducer);
  const location = useLocation().pathname;

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate(ROUTES.AUTHORIZATION);
      dispatch(removeUser());
      dispatch(clearTweets());
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  return (
    <Aside>
      <Wrapper>
        <SideBarIconTwitter alt='twitter' src={twitter} />
        <Navigation>
          {APP_LINKS.map((link) => {
            const { name, path, outlineIcon, fillIcon } = link;

            return (
              <WrapperLink key={name} to={path}>
                <Icon alt={name} src={location === path ? fillIcon : outlineIcon} />
                <TextLink $isActive={location === path}>{link.name}</TextLink>
              </WrapperLink>
            );
          })}
        </Navigation>
        <TweetBtn onClick={handleOpen}>{CONSTANTS.ASIDE_TWEET}</TweetBtn>
      </Wrapper>
      <UserWrapper>
        <ImageUserWrapper>
          <ImageUser alt='user icon' src={defaultUser} />
        </ImageUserWrapper>
        <UserInfo>
          <UserName>{user.displayName}</UserName>
          <UserSubtitle>{user.link ? user.link : user.email}</UserSubtitle>
        </UserInfo>
      </UserWrapper>
      <LogOutBtn onClick={handleSignOut}>{CONSTANTS.ASIDE_LOG_OUT}</LogOutBtn>
      {isOpen && (
        <Modal onClose={handleClose}>
          <TweetWrapper>
            <TweetForm onClose={handleClose} />
          </TweetWrapper>
        </Modal>
      )}
    </Aside>
  );
}
