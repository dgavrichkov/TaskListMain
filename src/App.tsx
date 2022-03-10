import { THEMES } from "./constants/themes";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { NotesList } from "./components/NotesList";
import { GlobalStyles } from "./styles/globalStyles";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Routes, Route } from "react-router-dom";
import { TasksPage } from "./components/pages/TasksPage";
import { NotesPage } from "./components/pages/NotesPage";

export const App = function() {
  const theme = useTypedSelector((state) => state.theme)

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <StyledPageWrap className="page">
        <Header pageClass="header" />
        <main className="main">
          <Routes>
            <Route index element={<TasksPage />}/>
            <Route path="tasks" element={<TasksPage />}/>
            <Route path="notes" element={<NotesPage />}/>
          </Routes>
        </main>
        {/* <Routes>
          <Route index element={<TaskList pageClass="list" />}/>
          <Route path="tasks" element={<TaskList pageClass="list" />}/>
          <Route path="notes" element={<NotesList pageClass="notes"/>}/>
        </Routes> */}
        <footer className="footer">
          <i>Just footer</i>
        </footer>
      </StyledPageWrap>
    </ThemeProvider>
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.colors.text || `#000`};
    }
  }
  .main {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    align-content: start;
    gap: 20px;
    .title {
      grid-column: 1 / -1;
    }
    .form {
      grid-column: 1 / -1;
    }
    .aside {
      grid-column: 1 / 2;
      display: grid;
      gap: 20px;
    }
    .content {
      grid-column: 2 / -1;
    }
  }

  .footer {
    grid-column: 1 / -1;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;