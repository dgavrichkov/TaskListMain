import { Task } from "./Task";

export type TaskNew = Pick<Task, "name" | "category">;
