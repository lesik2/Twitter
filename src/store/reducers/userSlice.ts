/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState } from '@customTypes/models';

const initialState: UserState = {
  displayName: null,
  phoneNumber: null,
  dateOfBirth: null,
  uid: null,
  email: null,
  link: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<UserState>) => action.payload,
    removeUser: (_state) => initialState,
    updateUserProfile: (state, action: PayloadAction<Omit<UserState, 'uid' | 'email' | 'dateOfBirth'>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});
export const { setUser, removeUser, updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
