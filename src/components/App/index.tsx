import { useAuthState } from 'react-firebase-hooks/auth';
import { LoadingPage } from '@pages/LoadingPage';

import { Router } from '../Router';

import { auth } from '@//firebase';

export const App = () => {
  const [user, loading] = useAuthState(auth);

  return <>{loading ? <LoadingPage /> : <Router user={user} />}</>;
};
