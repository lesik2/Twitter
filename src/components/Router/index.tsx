import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@constants/routes';
import { IRouter } from '@customTypes/index';

export const Router = ({ user }: IRouter) => (
  <>
    {user ? (
      <Routes>
        {privateRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    ) : (
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    )}
  </>
);
