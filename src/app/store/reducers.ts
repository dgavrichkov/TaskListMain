import { combineReducers } from '@reduxjs/toolkit';
import {
  notesReducer,
  tasksReducer,
  themeReducer,
  categoriesReducer,
  filterReducer,
} from '../../entities';
import { verbReducer } from '../../entities/verb';

export const reducers = combineReducers({
  theme: themeReducer,
  notes: notesReducer,
  tasks: tasksReducer,
  categories: categoriesReducer,
  filter: filterReducer,
  verb: verbReducer,
});
