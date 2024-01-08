import { useEffect, useState } from 'react';
import { useAppSelector } from '@hooks/redux';
import { ITweetComponent } from '@customTypes/index';
import { getTweetsForAllUsers } from '@db/tweetsForAllUsers';

export function useGetTweets() {
  const user = useAppSelector((state) => state.userReducer);
  const tweets = useAppSelector((state) => state.tweetsReducer.tweets);
  const [tweetsData, setTweetsData] = useState<ITweetComponent[]>([]);

  useEffect(() => {
    const { uid } = user;
    if (uid) {
      getTweetsForAllUsers(uid)
        .then((allTweets) => {
          setTweetsData(allTweets);
        })
        .catch((error) => console.error(error));
    }
  }, [tweets, user]);

  return tweetsData;
}
