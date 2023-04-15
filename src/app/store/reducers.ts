import {
  notesReducer,
  tasksReducer,
  themeReducer,
  categoriesReducer,
} from "../../entities";

export const reducers = {
  theme: themeReducer,
  notes: notesReducer,
  tasks: tasksReducer,
  categories: categoriesReducer,
};
