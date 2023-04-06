import { combineReducers } from "redux";
import { tasksReducer as tasks } from "./tasksReducer";
import { notesReducer as notes } from "./notesReducer";
import { taskFilterReducer as tasksFilter } from "./taskFilterReducer";
import { notesFilterReducer as notesFilter } from "./notesFilterReducer";

export const rootReducer = combineReducers({
  tasks,
  notes,
  tasksFilter,
  notesFilter,
});

export type RootState = ReturnType<typeof rootReducer>;
