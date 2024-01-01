import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@constants/routes';
import { IRouter } from '@customTypes/index';
import { useRoute } from '@hooks/useRoute';

import { Wrapper } from './styled';

import { SideBar } from '../SideBar';
import { Search } from '../Search';

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
          <Search />
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
