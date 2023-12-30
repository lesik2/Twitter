import { useAuthState } from 'react-firebase-hooks/auth';
import { LoadingPage } from '@pages/LoadingPage';
import { useUser } from '@hooks/useUser';
import { useTheme } from '@hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import { auth } from '@db/index';

import { Router } from '../Router';


export const App = () => {
  const [user, loading] = useAuthState(auth);
  useUser(user);
  const theme = useTheme();

  return <ThemeProvider theme={theme}>{loading ? <LoadingPage /> : <Router user={user} />}</ThemeProvider>;
};
