import { Route, Routes, useLocation } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@constants/routes';
import { IRouter } from '@customTypes/index';
import { useRoute } from '@hooks/useRoute';
import { ROUTES } from '@constants/index';
import { useState } from 'react';
import search from '@assets/icons/search.svg';

import { OpenSearchBtn, Wrapper } from './styled';

import { SideBar } from '../SideBar';
import { SearchUsers } from '../SearchUsers';
import { SearchTweets } from '../SearchTweets';
import { BurgerMenu } from '../BurgerMenu';
import { Menu } from '../Menu';
import { ImageApp } from '../ui';

export const Router = ({ user }: IRouter) => {
  useRoute(user);
  const location = useLocation();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  const handleCloseSearch = () =>{
    setIsOpenSearch(false);
  }

  const handleCloseSideBar = ()=>{
    setIsOpenSideBar(false);
  }

  return (
    <Wrapper>
      {user ? (
        <>
          <BurgerMenu isOpen={isOpenSideBar} setIsOpen={setIsOpenSideBar} />
          <Menu isOpen={isOpenSideBar} setIsOpen={setIsOpenSideBar} position='left'>
            <SideBar onClose={handleCloseSideBar}/>
          </Menu>
          <Routes>
            {privateRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
          <OpenSearchBtn $isOpen={isOpenSearch} onClick={handleOpenSearch}>
            <ImageApp alt='search' src={search} />
          </OpenSearchBtn>
          <Menu isOpen={isOpenSearch} position='right' setIsOpen={setIsOpenSearch}>
            {location.pathname === ROUTES.PROFILE || location.pathname.startsWith(ROUTES.USERS) ? (
              <SearchUsers onClose={handleCloseSearch}/>
            ) : (
              <SearchTweets onClose={handleCloseSearch}/>
            )}
          </Menu>
        </>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      )}
    </Wrapper>
  );
};
