import { createSlice } from '@reduxjs/toolkit';
import { TThemeSlice } from './theme.interface';
import { THEMES_NAMES } from '../constants/themes';

const initialState: TThemeSlice = {
  theme: THEMES_NAMES.DARK,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === THEMES_NAMES.LIGHT) {
        state.theme = THEMES_NAMES.DARK;
      } else {
        state.theme = THEMES_NAMES.LIGHT;
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
