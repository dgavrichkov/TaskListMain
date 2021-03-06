import { Task } from "../../types/Task";
import { RootState } from "../reducers";

export const getTask = (
  state: RootState,
  id: string | undefined
): Task | false => {
  if (!id) return false;
  return state.tasks.data[id];
};
