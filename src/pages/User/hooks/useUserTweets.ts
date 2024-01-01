import { useEffect, useState } from 'react';
import { getUserById } from '@db/user';
import { getTweetsByUSerId } from '@db/tweet';

import { ITweet, UserState } from '@//types/models';

export function useUserTweets(id: string): [UserState | null, ITweet[]] {
  const [user, setUser] = useState<UserState | null>(null);
  const [tweets, setTweets] = useState<ITweet[]>([]);
  useEffect(() => {
    getUserById(id)
      .then((userById) => {
        if (userById) {
          setUser(userById);
        }
      })
      .catch((error: Error) => console.error(error));
    getTweetsByUSerId(id)
      .then((tweetsByUser) => {
        if (tweetsByUser.length > 0) {
          setTweets(tweetsByUser);
        }
      })
      .catch((error: Error) => console.error(error));
  }, [id]);

  return [user, tweets];
}
