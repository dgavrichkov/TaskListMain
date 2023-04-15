import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { TCategoriesState, TCategory } from './categories.interface';
import { RootState } from '../../../app/store';

const initialState: TCategoriesState = {
  categories: [],
  selectedCategories: {
    notes: [],
    tasks: [],
  }
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    createCategory: (state, {payload}: PayloadAction<TCategory>) => {
      state.categories.push(payload);
    },
  },
})

const selectCategories = (state: RootState) => state.categories.categories;
export const selectCategoryById = (id: string) =>
  createSelector(selectCategories, (categories) => categories.find((ctg) => ctg.id === id));

export const {createCategory} = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
