/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITweet, TweetState } from '@customTypes/models';

const initialState: TweetState = {
  tweets: [],
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setTweets: (state, action: PayloadAction<ITweet[]>) => {
      state.tweets = [...action.payload, ...state.tweets];

      return state;
    },
    deleteTweet: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tweets = state.tweets.filter((tweet) => tweet.id !== id);

      return state;
    },
    clearTweets: (_state) => initialState,

    updateTweet: (state, action: PayloadAction<{ id: string; userId: string; gap: number }>) => {
      const { gap, id, userId } = action.payload;
      state.tweets = state.tweets.map((tweet) => {
        if (tweet.id === id) {
          return {
            ...tweet,
            amountOfLikes: tweet.amountOfLikes + gap,
            usersLikes:
              gap < 0 ? tweet.usersLikes.filter((user) => user !== userId) : [...tweet.usersLikes, userId],
          };
        }

        return tweet;
      });

      return state;
    },
  },
});
export const { setTweets, deleteTweet, updateTweet, clearTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
