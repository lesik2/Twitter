import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { UserState, setUser } from '@store/reducers/userSlice';
import { COLLECTIONS } from '@constants/firebase';

import { useAppDispatch } from './redux';

import { db } from '../firebase';

export function useUser(user: User | undefined | null): void {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      const { uid } = user;
      const docRef = doc(db, COLLECTIONS.USERS, uid);
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            dispatch(setUser(docSnap.data() as UserState));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user, dispatch]);
}
