import { THEMES } from "./constants/themes";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/globalStyles";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Modal } from "./components/Modal";

export const App = function () {
  const theme = useTypedSelector((state) => state.theme);
  const [openPortal, setOpenPortal] = useState(false);
  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <StyledPageWrap className="page">
        <Header pageClass="header" />
        <main className="main">
          <Outlet />
          <button onClick={() => setOpenPortal(true)}>Open Portal Modal</button>
        </main>
        <footer className="footer">
          <i>Just footer</i>
        </footer>
        <Modal
          message="Hello Portal"
          onClose={() => setOpenPortal(false)}
          isOpen={openPortal}
        ></Modal>
      </StyledPageWrap>
    </ThemeProvider>
  );
};

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* TODO - вынести отдельно внутренние стили хедера */
    a {
      color: ${(props) => props.theme.colors.text || `#000`};
      &.is-active {
        color: ${(props: any) => props.theme.colors.accent};
      }
    }
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
