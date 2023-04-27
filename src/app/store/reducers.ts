import { combineReducers } from '@reduxjs/toolkit';
import { categoriesReducer } from 'entities/categories';
import { filterReducer } from 'entities/filter';
import { notesReducer } from 'entities/note';
import { tasksReducer } from 'entities/task';
import { themeReducer } from 'entities/theme';

export const reducers = combineReducers({
  theme: themeReducer,
  notes: notesReducer,
  tasks: tasksReducer,
  categories: categoriesReducer,
  filter: filterReducer,
});
