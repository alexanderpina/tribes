import { createGlobalStyle } from 'styled-components';
import Fonts from 'assets/fonts'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    src: local('Montserrat'), url(${Fonts.thin}) format('ttf');
  }
  
  @font-face {
    font-display: swap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local('Montserrat'), url(${Fonts.regular}) format('ttf');
  }
  
  @font-face {
    font-display: swap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat'), url(${Fonts.bold}) format('ttf');
  }

  #root {
    display: flex;
  }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto 10px;
  }


`;

export default GlobalStyles;