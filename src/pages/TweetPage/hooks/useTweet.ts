import { useEffect, useState } from 'react';
import { getUserById } from '@db/user';
import { getTweetById } from '@db/tweet';
import { ITweet, UserState } from '@customTypes/models';

export function useTweet(id: string): [UserState | null, ITweet | null] {
  const [user, setUser] = useState<UserState | null>(null);
  const [tweet, setTweet] = useState<ITweet | null>(null);

  useEffect(() => {
    getTweetById(id)
      .then((tweetByUser) => {
        if (tweetByUser) {
          setTweet(tweetByUser);
          getUserById(tweetByUser.userId)
            .then((userById) => {
              if (userById) {
                setUser(userById);
              }
            })
            .catch((error: Error) => console.error(error));
        }
      })
      .catch((error: Error) => console.error(error));
  }, [id]);

  return [user, tweet];
}
