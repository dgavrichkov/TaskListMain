type Colors = {
  primary: string;
  accent: string;
  text: string;
  pale: string;
};
type Shadows = {
  button: string;
  input: string;
  buttonInset: string;
};

export type Theme = {
  name: string;
  colors: Colors;
  shadows: Shadows;
};
