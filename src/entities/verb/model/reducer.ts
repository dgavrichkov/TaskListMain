import { createSlice } from '@reduxjs/toolkit';
import { setWordReference } from './actions';
import { TVerbState } from './interface';

const initialState: TVerbState = {
  wordReference: {
    data: {},
    idList: [],
  },
  phrasalVerbs: {
    data: {},
    idList: [],
  },
};

const verbSlice = createSlice({
  name: 'verb',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setWordReference, (state, { payload }) => {
      payload.forEach((word) => {
        state.wordReference.data[word.id] = word;
        state.wordReference.idList.push(word.id);
      });
    });
  },
});

export const verbReducer = verbSlice.reducer;
