import { useAuthState } from 'react-firebase-hooks/auth';
import { LoadingPage } from '@pages/LoadingPage';
import { useUser } from '@hooks/useUser';

import { Router } from '../Router';

import { auth } from '@//firebase';

export const App = () => {
  const [user, loading] = useAuthState(auth);
  useUser(user);

  return <>{loading ? <LoadingPage /> : <Router user={user} />}</>;
};
