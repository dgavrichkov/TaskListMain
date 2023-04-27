import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
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

const selectCategories = (state: RootState) => state.categories.categories;
export const selectCategoryById = (id: string) =>
  createSelector(selectCategories, (categories) => categories.find((ctg) => ctg.id === id));

export const { createCategory } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
