import { FC } from 'react'
import { ThemeProvider } from 'styled-components';
import { THEMES } from '../../constants/themes';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GlobalStyles } from '../../styles/globalStyles';

export const StyleProvider: FC = ({children}) => {
  const theme = useTypedSelector((state) => state.theme);

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
