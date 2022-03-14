import { Note } from "../../types/Note";
import { RootState } from "../reducers";

// ??? id type
export const getNote = (
  state: RootState,
  id: string | undefined
): Note | false => {
  if (!id) return false;
  return state.notes.data[id];
};
