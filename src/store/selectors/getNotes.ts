import { RootState } from "../reducers";

export const getNotes = (state: RootState) => {
  return state.notes.idList.map((id: string) => state.notes.data[id]);
};
