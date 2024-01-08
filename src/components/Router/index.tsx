import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@constants/routes';
import { IRouter } from '@customTypes/index';
import { useRoute } from '@hooks/useRoute';

import { Wrapper } from './styled';

import { Layout } from '../Layout';

export const Router = ({ user }: IRouter) => {
  useRoute(user);

  return (
    <Wrapper data-cy='app-wrapper'>
      {user ? (
        <Layout>
          <Routes>
            {privateRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </Layout>
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
