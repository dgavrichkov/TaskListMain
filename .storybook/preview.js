import { ThemeProvider } from "styled-components";
import {THEMES} from "../src/app/styles/themes";
import {GlobalStyles} from "../src/app/styles/globalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: ["light", "dark"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme;
  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
