import { Note } from "../../types/Note";
import { RootState } from "../reducers"

// ??? id type
export const getNoteFromState = (state: RootState, id: string | undefined): Note | false => {
    if(!id) return false
    return state.notes.data[id]
}