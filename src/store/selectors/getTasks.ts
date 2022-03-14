import { RootState } from "../reducers";

export const getTasks = (state: RootState) => {
  return state.tasks.idList.map((id: string) => state.tasks.data[id]);
};
