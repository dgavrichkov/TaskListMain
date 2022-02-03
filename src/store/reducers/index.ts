import { combineReducers } from "redux";
import { tasksReducer as tasks } from "./tasksReducer";
import { notesReducer as notes } from "./notesReducer";

export const rootReducer = combineReducers({
  tasks,
  notes
});

// экспортируем тип корневого редусера, полученый от непосредственно от него
// пока его не использую, по какой-то причине тип там не такой, как надо
export type RootState = ReturnType<typeof rootReducer>;
