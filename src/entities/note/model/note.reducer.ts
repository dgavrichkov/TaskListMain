import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TNoteNew, TNotesState } from './note.interface';

const initialState: TNotesState = {
  data: {},
  idList: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: (state, { payload }: PayloadAction<TNoteNew>) => {
      const newNote = { id: 'note-' + Date.now().toString(), ...payload };
      state.data[newNote.id] = newNote;
      state.idList.push(newNote.id);
    },
    deleteNote: (state, { payload }: PayloadAction<string>) => {
      const { [payload]: removedNote, ...notes } = state.data;
      state.data = notes;
      state.idList = state.idList.filter((id) => id !== payload);
    },
  },
});

export const { createNote, deleteNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
