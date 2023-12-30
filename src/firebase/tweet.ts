import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  increment,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { COLLECTIONS } from '@constants/firebase';
import { ITweet } from '@customTypes/models';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { db, storage } from '.';

export const getTweetsByUSerId = async (uid: string) => {
  const tweets: ITweet[] = [];
  const tweetsCollectionRef = collection(db, COLLECTIONS.TWEETS);
  const searchQueryUserId: keyof ITweet = 'userId';
  const searchQueryTimestamp: keyof ITweet = 'timestamp';
  const queryTweets = query(
    tweetsCollectionRef,
    where(searchQueryUserId, '==', uid),
    orderBy(searchQueryTimestamp, 'desc'),
  );

  const querySnapshot = await getDocs(queryTweets);
  querySnapshot.forEach((docTweet) => {
    tweets.push(docTweet.data() as ITweet);
  });

  return tweets;
};

export const uploadImageToStorage = async (imageFile: File): Promise<string | undefined> => {
  const tweetRef = ref(storage, `${COLLECTIONS.TWEETS}/${imageFile.name}`);
  let imageUrl: string | undefined;

  try {
    await uploadBytes(tweetRef, imageFile);
    imageUrl = await getDownloadURL(tweetRef);
  } catch (error) {
    console.error(error);
  }

  return imageUrl;
};

export const addTweet = async (
  tweet: ITweet,
  image: File | null,
): Promise<[string | undefined, string | null]> => {
  let tweetId: string | null = null;
  let imageUrl: string | undefined;

  try {
    const tweetToSave = { ...tweet };
    if (image) {
      imageUrl = await uploadImageToStorage(image);
      tweetToSave.imageUrl = imageUrl;
    }

    const tweetsCollectionRef = collection(db, COLLECTIONS.TWEETS);
    const docRef = await addDoc(tweetsCollectionRef, tweetToSave);
    tweetId = docRef.id;
    await updateDoc(doc(tweetsCollectionRef, tweetId), {
      id: tweetId,
    });
  } catch (error) {
    console.error(error);
  }

  return [imageUrl, tweetId];
};

export const deleteTweetFromFirebase = async (id: string) => {
  try {
    const tweetsCollectionRef = collection(db, COLLECTIONS.TWEETS);
    await deleteDoc(doc(tweetsCollectionRef, id));
  } catch (error) {
    console.error(error);
  }
};

export const likeTweetFromFirebase = async (id: string, uid: string, gap: number) => {
  try {
    const tweetsCollectionRef = collection(db, COLLECTIONS.TWEETS);
    await updateDoc(doc(tweetsCollectionRef, id), {
      amountOfLikes: increment(gap),
      usersLikes: gap < 0 ? arrayRemove(uid) : arrayUnion(uid),
    });
  } catch (error) {
    console.error(error);
  }
};
