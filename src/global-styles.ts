import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font: 300 14px/17px 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    
    * {
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
    }
  }

  p {
    margin-bottom: 15px;
  }

  #root {
    display: flex;
    margin: 0;
  
  }
`;

export default GlobalStyles;