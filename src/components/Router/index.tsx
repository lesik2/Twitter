import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@constants/routes';
import { IRouter } from '@customTypes/index';

import { Wrapper } from './styled';

import { SideBar } from '../SideBar';

export const Router = ({ user }: IRouter) => (
  <Wrapper>
    {user ? (
      <>
        <SideBar />
        <Routes>
          {privateRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
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
