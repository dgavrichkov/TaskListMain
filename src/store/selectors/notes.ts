import { RootState } from "../reducers"

export const getNotesFromState = (state: RootState) => {
    return state.notes.idList.map((id: string) => state.notes.data[id])
}