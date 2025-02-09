import { RootState } from '../../../app/store';

export const selectWordReference = (state: RootState) =>
  state.verb.wordReference.idList.map((id: string) => state.verb.wordReference.data[id]);
