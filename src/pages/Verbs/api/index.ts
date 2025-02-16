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
