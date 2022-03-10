import { Note } from "./Note";

export type NotesState = {
    data: {
      [name: string]: Note
    },
    idList: string[]
}