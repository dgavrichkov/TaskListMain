import nextId from "react-id-generator";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TNoteNew, TNotesState } from './note.interface';

const initialState: TNotesState = {
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

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, {payload}: PayloadAction<TNoteNew>) => {
      // set note to state
      // maybe i dont need normalized state in this case? it's actually weird
      const newNote = { id: nextId(), ...payload};
      state.data[newNote.id] = newNote;
      state.idList.push(newNote.id);
    },
    deleteNote: (state, {payload}: PayloadAction<string>) => {
      const {[payload]: removedNote, ...notes} = state.data;
      state.data = notes;
      state.idList = state.idList.filter((id) => id !== payload);
    },
  }
})

export const {createNote, deleteNote} = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
