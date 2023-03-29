import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { THEMES } from "./constants/themes";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./widgets";
import { GlobalStyles } from "./styles/globalStyles";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Outlet } from "react-router-dom";
import { AuthProvider } from './entities';

const queryClient = new QueryClient()

export const App = function () {
  const theme = useTypedSelector((state) => state.theme)

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={THEMES[theme]}>
          <GlobalStyles />
          <StyledPageWrap className="page">
            <Header pageClass="header" />
            <main className="main">
              <Outlet />
            </main>
            <footer className="footer">
              <i>Just footer</i>
            </footer>
          </StyledPageWrap>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

const StyledPageWrap = styled.div`
  max-width: 964px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 32px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  color: ${(props) => props.theme.colors.text || `#000`};
  .header {
    grid-column: 1 / -1;
  }
  .main {
    grid-column: 1 / -1;
  }

  .footer {
    grid-column: 1 / -1;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
