import { APP_LINKS } from "@constants/sideBar";
import { useLocation, useNavigate } from "react-router-dom";
import {useAppSelector, useAppDispatch} from "@hooks/redux"
import defaultUser from '@assets/images/defaultUser.png';
import { ROUTES, CONSTANTS } from '@constants/index';
import { getAuth } from 'firebase/auth';
import { removeUser } from '@store/reducers/userSlice';
import twitter from '@assets/icons/twitter.svg';

import { Aside, Icon, ImageUser, ImageWrapper, TextLink, LogOutBtn, Navigation, TweetBtn, UserEmail, UserInfo, UserName, UserWrapper, Wrapper, WrapperLink } from "./styled";

import { IconTwitter } from "../ui";

export function SideBar() {
  const user = useAppSelector((state)=>state.userReducer);
  const location  = useLocation().pathname;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    try {
      await getAuth().signOut();
      navigate(ROUTES.AUTHORIZATION);
      dispatch(removeUser());
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  return (
    <Aside>
    <Wrapper>
      <IconTwitter alt="twitter" src={twitter}/>
      <Navigation>
        {APP_LINKS.map((link)=>{
          const {name, path, outlineIcon, fillIcon} = link;

          return (
            <WrapperLink key={name} to={path}>
              <Icon alt={name} src={location === path?fillIcon: outlineIcon}/>
              <TextLink  $isActive={location === path}>
                {link.name}
              </TextLink>
            </WrapperLink>
          )
          
      })}
      </Navigation>
      <TweetBtn>
        {CONSTANTS.ASIDE_TWEET}
      </TweetBtn>
    </Wrapper>
    <UserWrapper>
        <ImageWrapper>
          <ImageUser alt="user icon" src={user.photoURL??defaultUser}/>
        </ImageWrapper>
        <UserInfo>
          <UserName>
            {user.displayName}
          </UserName>
          <UserEmail>
            {user.email}
          </UserEmail>
        </UserInfo>
      </UserWrapper>
      <LogOutBtn onClick={handleSignOut}>
        {CONSTANTS.ASIDE_LOG_OUT}
      </LogOutBtn>
    </Aside>
  )
}
