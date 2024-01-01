import { Route, Routes, useLocation } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@constants/routes';
import { IRouter } from '@customTypes/index';
import { useRoute } from '@hooks/useRoute';
import { ROUTES } from '@constants/index';

import { Wrapper } from './styled';

import { SideBar } from '../SideBar';
import { SearchUsers } from '../SearchUsers';
import { SearchTweets } from '../SearchTweets';

export const Router = ({ user }: IRouter) => {
  useRoute(user);
  const location = useLocation();

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
          {location.pathname === ROUTES.PROFILE || location.pathname.startsWith(ROUTES.USERS) ? (
            <SearchUsers />
          ) : (
            <SearchTweets />
          )}
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
