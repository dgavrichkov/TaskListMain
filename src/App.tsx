import { useState } from "react";
import { THEMES } from "./constants/themes";
import styled, { ThemeProvider } from "styled-components";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { TaskList } from "./components/TaskList";
import { CreateForm } from "./components/CreateForm";
import { TagFilter } from "./components/TagFilter";
import { TaskStat } from "./components/TaskStat";
import { NotesList } from "./components/NotesList";
import { GlobalStyles } from "./styles/globalStyles";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

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

export const App = function() {
  const [filter, setFilter] = useState<string>("all");
  const theme = useTypedSelector((state) => state.theme)

  const filterTasklist = (tag: string) => {
    setFilter(tag);
  };

  const { toggleThemeAction } = useActions();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <StyledPageWrap className="page">
        <header className="header">
          <h1>ToDo</h1>
          <ThemeSwitcher onThemeClick={toggleThemeAction} />
        </header>
        <CreateForm pageClass="form" />
        <TaskStat
          pageClass="stat"
        />
        <TaskList pageClass="list" filter={filter} />
        <TagFilter
          pageClass="filter"
          currentFilter={filter}
          onPickTag={filterTasklist}
        />
        <NotesList pageClass="notes" />
      </StyledPageWrap>
    </ThemeProvider>
  );
}


