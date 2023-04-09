import { notesReducer, tasksReducer, themeReducer } from '../../entities';

export const reducers = {
  theme: themeReducer,
  notes: notesReducer,
  tasks: tasksReducer,
};
