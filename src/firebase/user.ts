import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { COLLECTIONS } from '@constants/firebase';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';

import { UserState } from '../types/models';

import { auth, db } from '.';

export const getUserById = async (uid: string) => {
  let user: UserState | null = null;
  const docRef = doc(db, COLLECTIONS.USERS, uid);
  const docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    user = docSnapShot.data() as UserState;
  }

  return user;
};

export const setUser = async (user: UserState) => {
  const { uid } = user;
  if (uid) {
    try {
      await setDoc(doc(db, COLLECTIONS.USERS, uid), user);
    } catch (error) {
      console.error(error);
    }
  }
};

export async function updateUserInfo(name: string, phoneNumber: string, link: string): Promise<void> {
  const user = auth.currentUser;
  if (user) {
    const userDoc = doc(db, 'users', user.uid);
    await updateDoc(userDoc, {
      displayName: name,
      phoneNumber,
      link,
    });
  }
}

export async function updateUserPassword(password: string, newPassword: string): Promise<void> {
  const user = auth.currentUser;
  const email = user?.email;
  if (user && email) {
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
  }
}
