import { User } from 'firebase/auth';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '../constants';

export function useRoute(user: User | undefined | null): void {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && location.pathname === ROUTES.AUTHORIZATION) {
      navigate(ROUTES.HOME);
    }
  }, [user, location, navigate]);
}
