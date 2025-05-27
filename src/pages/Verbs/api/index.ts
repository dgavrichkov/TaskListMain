import { TWord, TPhrasalVerb } from '../../../entities/verb/model/interface';

const BASE_URL = import.meta.env.VITE_APP_API_URL;

/** load words from verbs "endpoint" */
export const loadWords = async (signal?: AbortSignal): Promise<TWord[]> => {
  const response = await fetch(`${BASE_URL}/words`, { signal });

  if (!response.ok) {
    throw new Error('Error in words loading');
  }

  const words = await response.json();

  return words;
};

export const loadPhrasalVerbs = async (signal?: AbortSignal): Promise<TPhrasalVerb[]> => {
  const response = await fetch(`${BASE_URL}/phrasals`, { signal });

  if (!response.ok) {
    throw new Error('Error in words loading');
  }

  const pharasals = await response.json();

  return pharasals;
};

export const postNewWord = async (word: string): Promise<TWord> => {
  const response = await fetch(`${BASE_URL}/words`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      label: word,
    }),
  });

  const data = await response.json();

  console.log('new word added', data);

  return data;
};

export const postNewPhrasal = async (phrasal: Omit<TPhrasalVerb, 'id'>): Promise<TPhrasalVerb> => {
  const response = await fetch(`${BASE_URL}/phrasals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(phrasal),
  });

  const data = await response.json();

  console.log('new phrasal added', data);

  return data;
};
