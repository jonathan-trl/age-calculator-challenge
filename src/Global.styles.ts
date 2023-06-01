import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    font-weight: 700;
    src: local('Poppins'), url(./src/assets/fonts/Poppins-Bold.ttf) format('opentype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 700;
    font-style: italic;
    src: local('Poppins'), url(./src/assets/fonts/Poppins-Bold-Italic.ttf) format('opentype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 800;
    src: local('Poppins'), url(./src/assets/fonts/Poppins-ExtraBold.ttf) format('opentype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 800;
    font-style: italic;
    src: local('Poppins'), url(./src/assets/fonts/Poppins-ExtraBoldItalic.ttf) format('opentype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: italic;
    src: local('Poppins'), url(./src/assets/fonts/Poppins-Italic.ttf) format('opentype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    src: local('Poppins'), url(./src/assets/fonts/Poppins-Regular.ttf) format('opentype');
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
  }
  html, body {
    width: 100vw;
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.colors.lightgrey};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;

export default GlobalStyle;
