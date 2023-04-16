import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TFilterState } from './filter.interface';

const initialState: TFilterState = {
  notes: [],
  tasks: [],
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectCategoryForNotes: (state, {payload}: PayloadAction<string>) => {
      const selected = state.notes.find((id) => id === payload);
      if(selected) {
        state.notes = state.notes.filter((id) => id !== payload);
      } else {
        state.notes.push(payload);
      }
    },
    selectCategoryForTasks: (state, {payload}: PayloadAction<string>) => {
      const selected = state.tasks.find((id) => id === payload);
      if (selected) {
        state.tasks = state.tasks.filter((id) => id !== payload);
      } else {
        state.tasks.push(payload);
      }
    },
    clearFilterForNotes: (state) => {
      state.notes = initialState.notes;
    },
    clearFilterForTasks: (state) => {
      state.tasks = initialState.tasks;
    }
  }
})

export const {
  selectCategoryForNotes,
  selectCategoryForTasks,
  clearFilterForNotes,
  clearFilterForTasks,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
