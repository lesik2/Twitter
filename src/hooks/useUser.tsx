import { User } from 'firebase/auth';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { UserState, setTweets, setUser } from '@store/reducers/userSlice';
import { COLLECTIONS } from '@constants/firebase';

import { useAppDispatch } from './redux';

import { ITweet } from '../types';
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
      const tweetsCollectionRef = collection(docRef, COLLECTIONS.TWEETS);
      getDocs(tweetsCollectionRef)
        .then((querySnapshot) => {
          const tweetsData = querySnapshot.docs.map((tweetDoc) => tweetDoc.data());
          dispatch(setTweets(tweetsData as ITweet[]));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user, dispatch]);
}
