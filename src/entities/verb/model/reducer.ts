import { createSlice } from '@reduxjs/toolkit';
import { clearWordsReference, setWordReference } from './actions';
import { TVerbState, TWord } from './interface';

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
    builder
      .addCase(setWordReference, (state, { payload }) => {
        const res = payload.reduce((byId, word) => {
          byId[word.id] = word;
          return byId;
        }, {} as Record<string, TWord>);
        state.wordReference.data = res;
        state.wordReference.idList = Object.keys(res);
      })
      .addCase(clearWordsReference, (state) => {
        state.wordReference = initialState.wordReference;
      });
  },
});

export const verbReducer = verbSlice.reducer;
