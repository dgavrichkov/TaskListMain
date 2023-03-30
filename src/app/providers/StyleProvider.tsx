import { FC } from 'react'
import { ThemeProvider } from 'styled-components';
import { THEMES } from '../styles/themes';
import { GlobalStyles } from '../styles/globalStyles';
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const StyleProvider: FC = ({children}) => {
  const theme = useTypedSelector((state) => state.theme);

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
