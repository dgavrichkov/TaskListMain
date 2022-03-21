import { TasksState } from "../../types/TasksState";

export const getTasksCategories = (state: TasksState) => {
  return new Set(state.idList.map((id) => state.data[id].tag));
};
