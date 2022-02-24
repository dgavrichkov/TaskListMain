import { useState } from "react";
import { Themes } from "./types/Themes";
import { useTypedSelector } from "./hooks/useTypedSelector";
import styled, { ThemeProvider } from "styled-components";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { TaskList } from "./components/TaskList";
import { CreateForm } from "./components/CreateForm";
import { TagFilter } from "./components/TagFilter";
import { TaskStat } from "./components/TaskStat";
import { NotesList } from "./components/NotesList";
import { GlobalStyles } from "./styles/globalStyles";
import { getTasksFromState } from "./store/selectors/tasks";

const THEMES: Themes = {
  light: {
    colors: {
      primary: "#EEEEEE",
      accent: "#25CEDE",
      text: "#687891"
    },
    shadows: {
      button:
        "-5.0934px -5.0934px 15.2802px rgba(255, 255, 255, 0.5), 5.0934px 5.0934px 15.2802px rgba(136, 160, 183, 0.25);",
      input:
        "inset -5.9893px -5.9893px 17.9679px rgba(255, 255, 255, 0.5), inset 5.9893px 5.9893px 17.9679px rgba(136, 160, 183, 0.25);",
      buttonInset:
        "inset -5.0934px -5.0934px 15.2802px rgba(255, 255, 255, 0.5),inset 5.0934px 5.0934px 15.2802px rgba(136, 160, 183, 0.25);"
    }
  },
  dark: {
    colors: {
      primary: "#2C2F33",
      accent: "#25CEDE",
      text: "#eeeeee"
    },
    shadows: {
      button:
        "-6.22302px -6.22302px 18.6691px #3B4451, 6.22302px 6.22302px 18.6691px #000000;",
      input:
        "inset -6.22302px -6.22302px 18.6691px #3B4451, inset 6.22302px 6.22302px 18.6691px #000000;",
      buttonInset:
        "inset -6.22302px -6.22302px 18.6691px #3B4451, inset 6.22302px 6.22302px 18.6691px #000000;"
    }
  }
};

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
  const tasks = useTypedSelector(getTasksFromState);
  
  const [filter, setFilter] = useState<string>("all");
  const [theme, setTheme] = useState<string>("dark");

  const filterTasklist = (tag: string) => {
    setFilter(tag);
  };

  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <StyledPageWrap className="page">
        <header className="header">
          <h1>ToDo</h1>
          <ThemeSwitcher onThemeClick={handleSwitchTheme} />
        </header>
        <CreateForm pageClass="form" />
        <TaskStat
          pageClass="stat"
        />
        <TaskList pageClass="list" filter={filter} />
        <TagFilter
          pageClass="filter"
          tasks={tasks}
          currentFilter={filter}
          onPickTag={filterTasklist}
        />
        <NotesList pageClass="notes" />
      </StyledPageWrap>
    </ThemeProvider>
  );
}


