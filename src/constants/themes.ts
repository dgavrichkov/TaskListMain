import { Themes } from "../types/Themes";

export const THEMES: Themes = {
  light: {
    colors: {
      primary: "#EEEEEE",
      accent: "#25CEDE",
      text: "#687891",
      pale: "rgba(104, 120, 145, 0.25)",
    },
    shadows: {
      button:
        "-5.0934px -5.0934px 15.2802px rgba(255, 255, 255, 0.5), 5.0934px 5.0934px 15.2802px rgba(136, 160, 183, 0.25);",
      input:
        "inset -5.9893px -5.9893px 17.9679px rgba(255, 255, 255, 0.5), inset 5.9893px 5.9893px 17.9679px rgba(136, 160, 183, 0.25);",
      buttonInset:
        "inset -5.0934px -5.0934px 15.2802px rgba(255, 255, 255, 0.5),inset 5.0934px 5.0934px 15.2802px rgba(136, 160, 183, 0.25);",
    },
  },
  dark: {
    colors: {
      primary: "#2C2F33",
      accent: "#25CEDE",
      text: "#eeeeee",
      pale: "rgba(104, 120, 145, 0.25)",
    },
    shadows: {
      button:
        "-6.22302px -6.22302px 18.6691px #3B4451, 6.22302px 6.22302px 18.6691px #000000;",
      input:
        "inset -6.22302px -6.22302px 18.6691px #3B4451, inset 6.22302px 6.22302px 18.6691px #000000;",
      buttonInset:
        "inset -6.22302px -6.22302px 18.6691px #3B4451, inset 6.22302px 6.22302px 18.6691px #000000;",
    },
  },
};
