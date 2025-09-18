import { atom, computed, map, onMount } from 'nanostores';
import { nanoquery } from '@nanostores/query';
import { DICTIONARY_API_URL } from './constants';
import { TDictApiResponse } from './interfaces';

//  returns the usual atom()
export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys) => fetch(keys.join('')).then((r) => r.json()),
});

export const $wordToRequest = atom('');
// export const $currentDiction = createFetcherStore<TDictApiResponse>([
//   DICTIONARY_API_URL,
//   `${$wordToRequest.get()}`,
// ]);
export const loadWordFromDictionary = async (word: string): Promise<TDictApiResponse[]> => {
  const response = await fetch(`${DICTIONARY_API_URL}/${word}`);

  if (!response.ok) {
    throw new Error('error in word request!');
  }

  return response.json();
};

export const mapStore = map({
  lang: 'en',
  theme: 'dark',
});

export interface ProfileValue {
  name: string;
  email?: string;
}

export const $profile = map<ProfileValue>({
  name: 'anonymous',
});

export const $computedProfile = computed($profile, (profile) => {
  return `${profile.name} Surturson`;
});
