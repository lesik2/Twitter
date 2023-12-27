import { Dispatch } from 'react';
import { doc, updateDoc } from 'firebase/firestore';

import { auth, db } from '@//firebase';

export async function updateUserInfo(
  setLoading: Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<Error | null>>,
  name: string,
  phoneNumber: string,
  dateOfBirth: number,
): Promise<void> {
  setLoading(true);
  const user = auth.currentUser;
  const id = user?.uid;
  const email = user?.email;
  if (user && id && email) {
    try {
      const userDoc = doc(db, 'users', id);

      await updateDoc(userDoc, {
        displayName: name,
        phoneNumber,
        dateOfBirth,
      });
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
