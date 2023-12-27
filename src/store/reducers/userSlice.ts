/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  displayName: string | null;
  phoneNumber: string | null;
  dateOfBirth: string | null;
  uid: string | null;
  email: string | null;
}

const initialState: UserState = {
  displayName: null,
  phoneNumber: null,
  dateOfBirth: null,
  uid: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<UserState>) => action.payload,
    removeUser: (_state) => initialState,
  },
});
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
