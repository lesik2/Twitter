import { useAuthState } from 'react-firebase-hooks/auth';
import { LoadingPage } from '@pages/LoadingPage';

import { Router } from '../Router';

import { auth } from '@//firebase';
import { useUser } from '@//hooks/useUser';

export const App = () => {
  const [user, loading] = useAuthState(auth);
  useUser(user);

  return <>{loading ? <LoadingPage /> : <Router user={user} />}</>;
};
