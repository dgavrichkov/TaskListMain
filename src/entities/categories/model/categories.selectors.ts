import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

const selectCategories = (state: RootState) => state.categories.categories;

export const selectCategoryById = (id: string) =>
  createSelector(selectCategories, (categories) => categories.find((ctg) => ctg.id === id));
