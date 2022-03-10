import { Note } from "./Note";
import { NotesActionTypes } from "./NotesActionTypes";

type AddNoteAction = {
    type: NotesActionTypes.ADD_NOTE,
    payload: Note
}

type DelNoteAction = {
    type: NotesActionTypes.DEL_NOTE,
    payload: string
}

export type NotesAction = AddNoteAction | DelNoteAction