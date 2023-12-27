import { Dispatch } from 'react';
import { reauthenticateWithCredential, EmailAuthProvider, verifyBeforeUpdateEmail } from 'firebase/auth';

import { auth } from '@//firebase';

export async function updateUserPassword(
  setLoading: Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<Error | null>>,
  newEmail: string,
  password: string,
): Promise<void> {
  setLoading(true);
  const user = auth.currentUser;
  const email = user?.email;
  if (user && email) {
    try {
      const credential = EmailAuthProvider.credential(email, password);
      await reauthenticateWithCredential(user, credential);
      await verifyBeforeUpdateEmail(user, newEmail);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    }
  }
}
