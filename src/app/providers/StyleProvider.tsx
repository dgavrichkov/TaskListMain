import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { THEMES } from '../styles/themes';
import { GlobalStyles } from '../styles/globalStyles';
import { useAppSelector } from '../store';

export const StyleProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
