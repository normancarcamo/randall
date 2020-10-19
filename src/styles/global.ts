import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { colors, fontFamily, fontSize } from './base';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.white100};
    color: ${colors.darkGray};
    font-family: ${fontFamily.exo};
    font-size: ${fontSize.small};
    font-weight: 100;
    margin: 0;
  }

  a {
    text-decoration: none;
    :visited {
      color: ${colors.darkGray};
    }
  }
`;

export default GlobalStyle;
