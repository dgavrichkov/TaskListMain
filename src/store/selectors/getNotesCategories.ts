import { NotesState } from "../../types/NotesState";

export const getNotesCategories = (state: NotesState) => {
  return new Set(state.idList.map((id) => state.data[id].category));
};
