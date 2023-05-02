import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTaskNew, TTasksState } from './task.interface';

const initialState: TTasksState = {
  data: {},
  idList: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, { payload }: PayloadAction<TTaskNew>) => {
      const newTask = { id: 'task-' + Date.now().toString(), ...payload, done: false };
      state.data[newTask.id] = newTask;
      state.idList.push(newTask.id);
    },
    deleteTask: (state, { payload }: PayloadAction<string>) => {
      const { [payload]: removedTask, ...tasks } = state.data;
      state.data = tasks;
      state.idList = state.idList.filter((id) => id !== payload);
    },
    toggleTask: (state, { payload }: PayloadAction<string>) => {
      state.data[payload].done = !state.data[payload].done;
    },
  },
});

export const { createTask, deleteTask, toggleTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
