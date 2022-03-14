import { NotesAction } from "../../types/NotesAction";
import { NotesState } from "../../types/NotesState";
import { combineReducers } from "redux";
import { NotesActionTypes } from "../../types/NotesActionTypes";

const initialNotesState: NotesState = {
  data: {
    "1": {
      id: "1",
      name: "Lorem",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      category: "база",
    },
    "2": {
      id: "2",
      name: "Note 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ein voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      category: "заметки",
    },
  },
  idList: ["1", "2"],
};

const data = (state = initialNotesState.data, action: NotesAction) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case NotesActionTypes.DEL_NOTE:
      const { [action.payload]: removedNote, ...restNotes } = state;
      return restNotes;
    default:
      return state;
  }
};

const idList = (state = initialNotesState.idList, action: NotesAction) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      return [...state, action.payload.id];
    case NotesActionTypes.DEL_NOTE:
      return state.filter((noteId) => noteId !== action.payload);
    default:
      return state;
  }
};

export const notesReducer = combineReducers({
  data,
  idList,
});
