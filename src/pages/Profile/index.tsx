import { ROUTES } from '@constants/index';
import { Button } from '@components/ui/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@hooks/redux';
import { removeUser } from '@store/reducers/userSlice';

export function Profile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    try {
      await getAuth().signOut();
      navigate(ROUTES.AUTHORIZATION);
      dispatch(removeUser());
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Button onClick={handleSignOut}>Sign out</Button>
    </>
  );
}
