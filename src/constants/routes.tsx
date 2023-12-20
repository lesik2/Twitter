import {LogIn} from '@pages/LogIn/index';
import {Home} from '@pages/Home/index';
import {Authorization} from '@pages/Authorization/index';
import {Profile} from '@pages/Profile/index';
import {SignUp} from '@pages/SignUp/index';
import {IRoute} from '@customTypes/routes'
import { NotFound } from '@pages/NotFound';

import { ROUTES } from './index';



export const publicRoutes: Readonly<IRoute[]> = [

    {
      path: ROUTES.LOG_IN,
      element: <LogIn />
    },

    {
      path: ROUTES.SIGN_UP,
      element: <SignUp />
    },

    {
      path: ROUTES.AUTHORIZATION,
      element: <Authorization />,
      index: true,
    },
    {
      path: '*',
      element: <NotFound />,
    },

] as const;

export const privateRoutes: Readonly<IRoute[]> = [
    {
      path: ROUTES.PROFILE,
      element: <Profile />,
    },
    {
      path: ROUTES.HOME,
      element: <Home />
    },
    {
      path: '*',
      element: <NotFound />,
    },
] as const;