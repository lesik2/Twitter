/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';
export interface ThemeState {
  currentTheme: Theme;
}
const initialState: ThemeState = {
  currentTheme: (localStorage.getItem('theme') as Theme) ?? 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.currentTheme);
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
