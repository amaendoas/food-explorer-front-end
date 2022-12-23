import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  #root {
    animation: slideUp 1s ease backwards;
  }

  .suppress-scroll {
    overflow: hidden;
  }

  .default-msg {
    font-size: 2rem;
    
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  h1 {
      font-size: calc(2rem + 0.8vw);
    }

  h2 {
    font-size: calc(1.2rem + 0.8vw);
  }

  h3 {
    font-size: calc(1rem + 0.5vw);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  button, a, textarea {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  input, textarea {
    background: transparent;
    border: none;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
  }

  a:hover, button:hover {
    filter: brightness(1.2);
  }

  button:disabled {
    filter: brightness(0.3);
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

  @keyframes slideUp {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(200px);
    }
    100% {
      transform: translateX(0);
    }
  }


`