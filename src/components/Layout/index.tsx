import { ROUTES } from '@constants/index';
import search from '@assets/icons/search.svg';
import { useLocation } from 'react-router-dom';
import { ReactNode, useState } from 'react';

import { OpenSearchBtn } from './styled';

import { SideBar } from '../SideBar';
import { SearchUsers } from '../SearchUsers';
import { SearchTweets } from '../SearchTweets';
import { BurgerMenu } from '../BurgerMenu';
import { Menu } from '../Menu';
import { ImageApp } from '../ui';



export function Layout({children}: {children: ReactNode}) {

  const location = useLocation();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  const handleCloseSearch = () => {
    setIsOpenSearch(false);
  };

  const handleCloseSideBar = () => {
    setIsOpenSideBar(false);
  };

  return (
    <>
    <BurgerMenu isOpen={isOpenSideBar} setIsOpen={setIsOpenSideBar} />
          <Menu isOpen={isOpenSideBar} setIsOpen={setIsOpenSideBar} position='left'>
            <SideBar onClose={handleCloseSideBar} />
          </Menu>
          {children}
          <OpenSearchBtn $isOpen={isOpenSearch} onClick={handleOpenSearch}>
            <ImageApp alt='search' src={search} />
          </OpenSearchBtn>
          <Menu isOpen={isOpenSearch} position='right' setIsOpen={setIsOpenSearch}>
            {location.pathname === ROUTES.PROFILE || location.pathname.startsWith(ROUTES.USERS) ? (
              <SearchUsers onClose={handleCloseSearch} />
            ) : (
              <SearchTweets onClose={handleCloseSearch} />
            )}
          </Menu>
    </>
    
  )
}
