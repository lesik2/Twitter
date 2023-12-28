import { doc, updateDoc } from 'firebase/firestore';

import { auth, db } from '@//firebase';

export async function updateUserInfo(name: string, phoneNumber: string, dateOfBirth: number): Promise<void> {
  const user = auth.currentUser;
  const id = user?.uid;
  const email = user?.email;
  if (user && id && email) {
    const userDoc = doc(db, 'users', id);

    await updateDoc(userDoc, {
      displayName: name,
      phoneNumber,
      dateOfBirth,
    });
  }
}
