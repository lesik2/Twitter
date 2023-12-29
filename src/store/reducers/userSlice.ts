/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ITweet } from '@//types';

export interface UserState {
  displayName: string | null;
  phoneNumber: string | null;
  dateOfBirth: number | null;
  uid: string | null;
  email: string | null;
  tweets: Array<ITweet>;
}

const initialState: UserState = {
  displayName: null,
  phoneNumber: null,
  dateOfBirth: null,
  uid: null,
  email: null,
  tweets: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => ({ ...state, ...action.payload }),
    removeUser: (_state) => initialState,
    updateUserProfile: (state, action: PayloadAction<Omit<UserState, 'uid' | 'email'>>) => ({
      ...state,
      ...action.payload,
    }),
    setTweets: (state, action: PayloadAction<ITweet[]>) => {
      state.tweets = [...action.payload, ...state.tweets];

      return state;
    },
    deleteTweet: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tweets = state.tweets.filter((tweet) => tweet.id !== id);

      return state;
    },
  },
});
export const { setUser, removeUser, updateUserProfile, setTweets, deleteTweet } = userSlice.actions;
export default userSlice.reducer;
