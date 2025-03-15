import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { loadWords, loadPhrasalVerbs } from '../../../pages/Verbs/api';
import { TPhrasalVerb, TWord } from './interface';

export const setWordReference = createAction<TWord[]>('verb/setWordReference');
export const setPhrasalVerbsReference = createAction<TPhrasalVerb[]>(
  'verb/setPhrasalVerbsReference',
);
export const clearWordsReference = createAction('verb/clearWordsReference');

export const getWordReference = createAsyncThunk(
  'verb/getWordReference',
  async (_, { dispatch }) => {
    const data = await loadWords();

    return dispatch(setWordReference(data));
  },
);

export const getPhrasalVerbsReference = createAsyncThunk(
  'verb/getPhrasalVerbsReference',
  async (_, { dispatch }) => {
    const data = await loadPhrasalVerbs();

    return dispatch(setPhrasalVerbsReference(data));
  },
);
