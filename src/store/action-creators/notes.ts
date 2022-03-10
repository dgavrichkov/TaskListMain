import { Dispatch } from "redux";
import nextId from "react-id-generator";
import { NoteNew } from "../../types/NoteNew";
import { NotesActionTypes } from "../../types/NotesActionTypes";
import { NotesAction } from "../../types/NotesAction";

export function addNoteAction(note: NoteNew) {
    return((dispatch: Dispatch<NotesAction>) => {
        const newNote = { id: nextId(), ...note };

        try {
            dispatch({
                type: NotesActionTypes.ADD_NOTE,
                payload: newNote
            })
        } catch(e) {
            console.log(e)
        }
    })
}

export function delNoteAction(id: string) {
    return((dispatch: Dispatch<NotesAction>) => {
        try {
            dispatch({
                type: NotesActionTypes.DEL_NOTE,
                payload: id
            })
        } catch (e) {
            console.log(e);
            
        }
    })
}