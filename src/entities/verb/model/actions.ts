import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { loadWords } from '../../../pages/Verbs/api';
import { TWord } from './interface';

export const setWordReference = createAction<TWord[]>('verb/setWordReference');
export const clearWordsReference = createAction('verb/clearWordsReference');

export const getWordReference = createAsyncThunk(
  'verb/getWordReference',
  async (_, { dispatch }) => {
    const data = await loadWords();

    return dispatch(setWordReference(data));
  },
);
