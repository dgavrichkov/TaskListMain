import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCategoriesState, TCategory } from './categories.interface';

const initialState: TCategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    createCategory: (state, { payload }: PayloadAction<TCategory>) => {
      state.categories.push(payload);
    },
  },
});

export const { createCategory } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
