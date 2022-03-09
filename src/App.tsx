import { THEMES } from "./constants/themes";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { CreateForm } from "./components/CreateForm";
import { TagFilter } from "./components/TagFilter";
import { TaskStat } from "./components/TaskStat";
import { NotesList } from "./components/NotesList";
import { GlobalStyles } from "./styles/globalStyles";
import { useTypedSelector } from "./hooks/useTypedSelector";

export const App = function() {
  const theme = useTypedSelector((state) => state.theme)

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <StyledPageWrap className="page">
        <Header pageClass="header" />
        <CreateForm pageClass="form" />
        <TaskStat
          pageClass="stat"
        />
        <TaskList pageClass="list" />
        <TagFilter
          pageClass="filter"
        />
        <NotesList pageClass="notes" />
      </StyledPageWrap>
    </ThemeProvider>
  );
}

const StyledPageWrap = styled.div`
  max-width: 964px;
  margin: 0 auto;
  padding: 20px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  color: ${(props: any) => props.theme.colors.text || `#000`};
  .header {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  .list {
    grid-column: 1;
    grid-row: 3 / 6;
    align-content: start;
  }
  .filter {
    grid-column: 2;
    grid-row: 4;
  }
  .stat {
    grid-column: 2 / -1;
    grid-row: 3;
  }

  .notes {
    grid-column: 1 / -1;
  }
`;