import { TasksState } from "./TasksState"

export type State = {
    tasks: TasksState,
    notes: any,
    theme: string
}