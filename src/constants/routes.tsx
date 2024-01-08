import { LogIn } from '@pages/LogIn/index';
import { Home } from '@pages/Home/index';
import { Authorization } from '@pages/Authorization/index';
import { Profile } from '@pages/Profile/index';
import { SignUp } from '@pages/SignUp/index';
import { IRoute } from '@customTypes/routes';
import { TweetPage } from '@pages/TweetPage/index';

import { UserPage } from '../pages/UserPage';

import { ROUTES } from './index';

export const publicRoutes: Readonly<IRoute[]> = [
  {
    path: ROUTES.LOG_IN,
    element: <LogIn />,
  },

  {
    path: ROUTES.SIGN_UP,
    element: <SignUp />,
  },

  {
    path: ROUTES.AUTHORIZATION,
    element: <Authorization />,
    index: true,
  },
  {
    path: '*',
    element: <Authorization />,
  },
] as const;

export const privateRoutes: Readonly<IRoute[]> = [
  {
    path: ROUTES.PROFILE,
    element: <Profile />,
  },
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: '*',
    element: <Home />,
  },
  {
    path: `users/:id`,
    element: <UserPage />,
  },
  {
    path: `tweets/:id`,
    element: <TweetPage />,
  },
] as const;
