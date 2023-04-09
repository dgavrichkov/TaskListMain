import { combineReducers } from "redux";
import { tasksReducer as tasks } from "./tasksReducer";
import { taskFilterReducer as tasksFilter } from "./taskFilterReducer";

export const rootReducer = combineReducers({
  tasks,
  tasksFilter,
});

export type RootState = ReturnType<typeof rootReducer>;
