import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { loadWords, loadPhrasalVerbs, postNewPhrasal, postNewWord } from '../../../pages/Verbs/api';
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

export const postWord = createAsyncThunk('verb/postWord', async (word: string, { dispatch }) => {
  const res = await postNewWord(word);
  dispatch(getWordReference());
  return res;
});

export const postPharasVerb = createAsyncThunk(
  'verb/postPharasVerb',
  async (data: Omit<TPhrasalVerb, 'id'>, { dispatch }) => {
    const res = await postNewPhrasal(data);

    dispatch(getPhrasalVerbsReference());

    return res;
  },
);
