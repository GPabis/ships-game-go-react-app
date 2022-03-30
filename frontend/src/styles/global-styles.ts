import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    list-style: none;
    text-decoration: none;
    color: #000;
  }

  button {
    transition: all 0.4s;
  }
  
  li, ul {
    padding: 0;
    list-style: none;
  }

  html {
    font-size: 62.5%;
  }
`;
