export interface ITheme {
  fontFamily: {
    serif: string;
    roboto: string;
  };

  fontWeight: {
    normal: string;
    medium: string;
    meduimL: string;
    bold: string;
    large: string;
  };
  zIndex: {
    modal: number;
  };
  breakPoints: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
  };
  colors: {
    primary: string;
    secondary: string;
    third: string;
    border: string;
    hover: string;
    option: string;
    error: string;
    disabled: string;
    modalWrapper: string;
    lightBorder: string;
  };
}
