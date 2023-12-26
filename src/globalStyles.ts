import { createGlobalStyle } from 'styled-components';

import '@fontsource/roboto';
import '@fontsource/roboto-serif';

const GlobalStyle = createGlobalStyle`
    *, *::before,*::after {
      box-sizing: border-box;
    }
    body{
      font-family: "Roboto";
      margin: 0;
      padding: 0;
      width: 100%;
    }
    ol, ul {
      list-style: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
    img,
    video,
    iframe {
      display: block;
      max-width: 100%;
    }
    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }
    a:active{
      text-decoration: none;
      color: inherit;
    }
    a:hover{
      text-decoration: none;
      color: inherit;
    }
    a:visited{
      text-decoration: none;
    }
    a:focus{
      text-decoration: none;
      color: inherit;
    }
`;

export default GlobalStyle;
