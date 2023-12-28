import { darkTheme, lightTheme } from '@constants/theme';

import { useAppSelector } from './redux';

export function useTheme() {
  const currentTheme = useAppSelector((state) => state.themeReducer.currentTheme);

  return currentTheme === 'light' ? lightTheme : darkTheme;
}
