import { RootState } from '../../../app/store';

export const selectWordsMap = (state: RootState) => state.verb.wordReference.data;

export const selectWordsList = (state: RootState) =>
  state.verb.wordReference.idList.map((id: string) => state.verb.wordReference.data[id]);
