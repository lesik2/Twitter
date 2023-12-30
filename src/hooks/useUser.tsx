import { User } from 'firebase/auth';
import { useEffect } from 'react';
import { setUser } from '@store/reducers/userSlice';
import { setTweets } from '@store/reducers/tweetsSlice';
import { getUserById } from '@db/user';
import { getTweetsByUSerId } from '@db/tweet';

import { useAppDispatch } from './redux';

export function useUser(user: User | undefined | null): void {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      const { uid } = user;
       getUserById(uid).then((userById)=>{
        if(userById){
          dispatch(setUser(userById))
        }
       }).catch((error: Error)=>console.error(error))
       getTweetsByUSerId(uid).then((tweets)=>{
        if(tweets.length>0){
          dispatch(setTweets(tweets))
        }
       }).catch((error: Error)=>console.error(error))
    }
  }, [user, dispatch]);
}
