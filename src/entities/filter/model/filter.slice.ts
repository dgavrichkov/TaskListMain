import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TFilterEntity, TFilterState, TFilterablePages } from './filter.interface';
import { ENTITY_NAMES } from '../constants';

const initialState: TFilterState = {
  notes: [],
  tasks: [],
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectCategory: (state, {payload}: PayloadAction<TFilterEntity>) => {
      switch (payload.entityType) {
        case ENTITY_NAMES.NOTES:
          const selectedNote = state.notes.find((id) => id === payload.id);
          if (selectedNote) {
            state.notes = state.notes.filter((id) => id !== payload.id);
          } else {
            state.notes.push(payload.id);
          }
          break;
        case ENTITY_NAMES.TASKS:
          const selectedTask = state.tasks.find((id) => id === payload.id);
          if (selectedTask) {
            state.tasks = state.tasks.filter((id) => id !== payload.id);
          } else {
            state.tasks.push(payload.id);
          }
          break;
        default:
          break;
      }
    },
    clearFilter: (state, {payload}: PayloadAction<TFilterablePages>) => {
      switch (payload) {
        case ENTITY_NAMES.NOTES:
          state.notes = initialState.notes;
          break;
        case ENTITY_NAMES.TASKS:
          state.tasks = initialState.tasks;
          break;
        default:
          break;
      }
    },
  }
})

export const {
  selectCategory,
  clearFilter,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
