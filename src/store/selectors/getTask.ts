import { TTask } from "../../types/Task";
import { RootState } from "../reducers";

export const getTask = (
  state: RootState,
  id: string | undefined
): TTask | false => {
  if (!id) return false;
  return state.tasks.data[id];
};
