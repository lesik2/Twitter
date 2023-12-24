import { ROUTES } from '@constants/index';
import { Button } from '@components/ui/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await getAuth().signOut();
    navigate(ROUTES.AUTHORIZATION);
  };

  return (
    <>
      <Button onClick={handleSignOut}>Sign out</Button>
    </>
  );
}
