type TColors = {
  primary: string;
  accent: string;
  text: string;
  pale: string;
  error: string;
};

type TShadows = {
  button: string;
  input: string;
  buttonInset: string;
  accent: string;
};

export type TTheme = {
  colors: TColors;
  shadows: TShadows;
};

export type TThemeSlice = {
  theme: string;
};
