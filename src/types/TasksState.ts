import { TTask } from "./Task";

export type TasksState = {
    data: {
      [name: string]: TTask
    },
    idList: string[]
}
