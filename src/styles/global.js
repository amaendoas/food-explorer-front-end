import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button, a, textarea {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a:hover, button:hover {
    filter: brightness(1.1);
  }


`