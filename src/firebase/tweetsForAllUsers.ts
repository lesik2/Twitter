import { collection, getDocs, orderBy, query } from 'firebase/firestore';

import { getUserById } from './user';

import { COLLECTIONS } from '../constants/firebase';
import { ITweet } from '../types/models';
import { ITweetComponent } from '../components/Tweet';
import { getFormatDate } from '../utils';

import { db } from '.';

export const getTweetsWithForAllUsers = async (idOfCurrentUser: string) => {
  const tweetComponents: ITweetComponent[] = [];
  const tweetsCollectionRef = collection(db, COLLECTIONS.TWEETS);

  const searchQueryTimestamp: keyof ITweet = 'timestamp';
  const queryTweets = query(tweetsCollectionRef, orderBy(searchQueryTimestamp, 'desc'));
  const querySnapshot = await getDocs(queryTweets);

  const userInfoPromises: Promise<void>[] = [];

  querySnapshot.forEach((docTweet) => {
    const tweetData = docTweet.data() as ITweet;
    const { text, imageUrl, id, userId, timestamp, usersLikes } = tweetData;
    const userInfoPromise = getUserById(tweetData.userId)
      .then((userInfo) => {
        if (userInfo) {
          const tweetComponent: ITweetComponent = {
            id,
            nameUser: userInfo.displayName ?? 'user',
            date: getFormatDate(timestamp),
            email: userInfo.link ?? userInfo.email ?? '@user',
            text,
            image: imageUrl,
            authorId: userId,
            amountOfLikes: tweetData.amountOfLikes,
            isLiked: usersLikes.includes(idOfCurrentUser),
          };

          tweetComponents.push(tweetComponent);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    userInfoPromises.push(userInfoPromise);
  });

  await Promise.all(userInfoPromises);

  return tweetComponents;
};
