import { ThemeProvider } from "styled-components";
import {THEMES} from "../src/app/styles/themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: "dark", value: THEMES.dark.colors.primary },
      { name: "light", value: THEMES.light.colors.primary },
    ]
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
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
