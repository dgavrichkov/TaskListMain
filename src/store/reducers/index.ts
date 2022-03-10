import { combineReducers } from "redux";
import { tasksReducer as tasks } from "./tasksReducer";
import { notesReducer as notes } from "./notesReducer";
import { themeReducer as theme } from "./themeReducer";
import { filterReducer as filter } from "./filterReducer";

export const rootReducer = combineReducers({
  tasks,
  notes,
  theme,
  filter
});

export type RootState = ReturnType<typeof rootReducer>;
