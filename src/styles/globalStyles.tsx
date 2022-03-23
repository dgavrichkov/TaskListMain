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
`;
