import { useAuthState } from 'react-firebase-hooks/auth';
import { LoadingPage } from '@pages/LoadingPage';
import { useTheme } from '@hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import { auth } from '@db/index';

import { Router } from '../Router';

import { useGetUserData } from '@//hooks/useGetUserData';

export const App = () => {
  const [user, loading] = useAuthState(auth);
  useGetUserData(user);
  const theme = useTheme();

  return <ThemeProvider theme={theme}>{loading ? <LoadingPage /> : <Router user={user} />}</ThemeProvider>;
};
