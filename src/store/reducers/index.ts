import { combineReducers } from "redux";
import { tasksReducer as tasks } from "./tasksReducer";
import { notesReducer as notes } from "./notesReducer";
import { themeReducer as theme } from "./themeReducer";

export const rootReducer = combineReducers({
  tasks,
  notes,
  theme
});

export type RootState = ReturnType<typeof rootReducer>;
