import { combineReducers } from '@reduxjs/toolkit';
import {
  notesReducer,
  tasksReducer,
  themeReducer,
  categoriesReducer,
  filterReducer,
} from "../../entities";

export const reducers = combineReducers({
  theme: themeReducer,
  notes: notesReducer,
  tasks: tasksReducer,
  categories: categoriesReducer,
  filter: filterReducer,
});
