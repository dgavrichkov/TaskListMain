import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { TTheme } from '../../entities/theme';

type TGlobalStyleProps = DefaultTheme & {
  theme: TTheme;
};

export const GlobalStyles = createGlobalStyle<TGlobalStyleProps>`


  body {
    font-family: "Rubik", sans-serif;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text || `#000`};
  }

  a, button, input, textarea {
    font-family: inherit;

    &:focus:not(:focus-visible) {
      outline: 0;
    }

    &:focus-visible,
    &:-moz-focusring {
      outline: 1px solid ${(props) => props.theme.colors.accent}
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
    border-top-color: ${(props) => props.theme.colors.primary};
  }

  .loader:before {
    z-index: 100;
    animation: spin 1s infinite;
  }

  .loader:after {
    border: 10px solid ${(props) => props.theme.colors.accent};
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
