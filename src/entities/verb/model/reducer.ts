import { createSlice } from '@reduxjs/toolkit';
import { clearWordsReference, setPhrasalVerbsReference, setWordReference } from './actions';
import { TPhrasalVerb, TVerbState, TWord } from './interface';

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
      })
      .addCase(setPhrasalVerbsReference, (state, { payload }) => {
        const res = payload.reduce((byId, phrasal) => {
          byId[phrasal.id] = phrasal;
          return byId;
        }, {} as Record<string, TPhrasalVerb>);

        state.phrasalVerbs.data = res;
        state.phrasalVerbs.idList = Object.keys(res);
      });
  },
});

export const verbReducer = verbSlice.reducer;
