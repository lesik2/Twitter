import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@constants/routes';
import { IRouter } from '@customTypes/index';
import search from '@assets/icons/search.svg';
import defaultUser from '@assets/images/defaultUser.png';


import {
  FollowBtn,
  ImageUser,
  ImageWrapper,
  SearchBtn,
  SearchInput,
  SearchResultText,
  SearchResultsWrapper,
  SearchSection,
  SearchWrapper,
  UserInfoWrapper,
  UserSubtitle,
  UserTitle,
  UserWrapper,
  Wrapper,
} from './styled';

import { SideBar } from '../SideBar';
import { ImageApp } from '../ui';

import { useRoute } from '@//hooks/useRoute';

export const Router = ({ user }: IRouter) => {

  useRoute(user);

  return (
  <Wrapper>
    {user ? (
      <>
        <SideBar />
        <Routes>
          {privateRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
        <SearchSection>
          <SearchWrapper>
            <SearchBtn>
              <ImageApp alt='search' src={search} />
            </SearchBtn>
            <SearchInput placeholder='Search Twitter' />
          </SearchWrapper>
          <SearchResultsWrapper>
            <SearchResultText>Search results</SearchResultText>
            <UserWrapper>
              <ImageWrapper>
                <ImageUser alt='user icon' src={defaultUser} />
              </ImageWrapper>
              <UserInfoWrapper>
                <UserTitle>Alex</UserTitle>
                <UserSubtitle>lesha@gmail.com</UserSubtitle>
              </UserInfoWrapper>
              <FollowBtn>Follow</FollowBtn>
            </UserWrapper>
          </SearchResultsWrapper>
        </SearchSection>
      </>
    ) : (
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    )}
  </Wrapper>
  )
};
