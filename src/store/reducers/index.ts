import { combineReducers } from "redux";
import { tasksReducer as tasks } from "./tasksReducer";
import { notesReducer as notes } from "./notesReducer";
import { themeReducer as theme } from "./themeReducer";
import { taskFilterReducer as tasksFilter } from "./taskFilterReducer";
import { notesFilterReducer as notesFilter } from "./notesFilterReducer";

export const rootReducer = combineReducers({
  tasks,
  notes,
  theme,
  tasksFilter,
  notesFilter,
});

export type RootState = ReturnType<typeof rootReducer>;
