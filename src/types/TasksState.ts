import { Task } from "./Task";

export type TasksState = {
    data: {
      [name: string]: Task
    },
    idList: string[]
}