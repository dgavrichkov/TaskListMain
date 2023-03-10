import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Rubik", sans-serif;
    background: ${(props: any) => props.theme.colors.primary};
  }
  a, button, input, textarea {
    font-family: inherit;
    &:focus:not(:focus-visible) {
      outline: 0;
    }
    &:focus-visible,
    &:-moz-focusring {
      outline: 1px solid ${(props: any) => props.theme.colors.accent}
    }
  }

  .loader {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;
  }

  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid transparent;
    border-top-color: ${(props: any) => props.theme.colors.primary};
  }

  .loader:before {
    z-index: 100;
    animation: spin 1s infinite;
  }

  .loader:after {
    border: 10px solid ${(props: any) => props.theme.colors.accent};
  }

  @keyframes spin {
    0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  }
`;
