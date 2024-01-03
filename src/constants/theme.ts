import { ITheme } from '@customTypes/theme';

export const theme = {
  fontFamily: {
    serif: 'Roboto Serif',
    roboto: 'Roboto',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    meduimL: '600',
    bold: '700',
    large: '900',
  },
  zIndex: {
    modal: 1000,
    burgerBtn: 1000,
    burgerMenu: 1000,
    burgerMenuBack: 900,
  },
  breakPoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1040px',
    laptopM: '1120px',
    laptopL: '1460px',
  },
};
export const lightTheme: ITheme = {
  ...theme,
  colors: {
    primary: '#FFFFFF',
    secondary: '#1D9BF0',
    third: '#000000',
    border: '#E4EAED',
    hover: '#23527C',
    option: '#00000099',
    error: '#ff0000',
    disabled: ' #B3B8BB',
    modalWrapper: 'rgba(0, 0, 0, 0.7)',
    lightBorder: '#F7F9F9',
  },
};
export const darkTheme: ITheme = {
  ...theme,
  colors: {
    primary: '#23272f',
    secondary: '#1D9BF0',
    third: '#FFFFFF',
    border: '#B3B8BB',
    hover: '#23527C',
    option: '#FFFFFF',
    error: '#ff0000',
    disabled: '#B3B8BB',
    modalWrapper: 'rgba(0, 0, 0, 0.7)',
    lightBorder: '#c9cecf',
  },
};

export const device = {
  mobileS: `(max-width: ${theme.breakPoints.mobileS})`,
  mobileM: `(max-width: ${theme.breakPoints.mobileM})`,
  mobileL: `(max-width: ${theme.breakPoints.mobileL})`,
  tablet: `(max-width: ${theme.breakPoints.tablet})`,
  laptop: `(max-width: ${theme.breakPoints.laptop})`,
  laptopM: `(max-width: ${theme.breakPoints.laptopM})`,
  laptopL: `(max-width: ${theme.breakPoints.laptopL})`,
} as const;
