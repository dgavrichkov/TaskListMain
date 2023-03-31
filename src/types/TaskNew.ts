import { TTask } from "./Task";

export type TaskNew = Pick<TTask, "name" | "category">;
