import { TasksActionTypes } from "./TasksActionTypes";
import { TasksState } from "./TasksState"
import { TTask } from "./Task";

type FetchTasksAction = {
    type: TasksActionTypes.FETCH_TASKS;
  }
type FetchTasksSuccessAction = {
type: TasksActionTypes.FETCH_TASKS_SUCCESS;
payload: TasksState;
}
type FetchAddTaskAction = {
type: TasksActionTypes.FETCH_ADD_TASK;
}
type AddTaskAction = {
  type: TasksActionTypes.ADD_TASK;
  payload: TTask;
};
type DelTaskAction = {
type: TasksActionTypes.DEL_TASK;
payload: string;
}
type ToggleTaskAction = {
type: TasksActionTypes.TOGGLE_TASK;
payload: string;
}

export type TasksAction =
| FetchTasksAction
| FetchTasksSuccessAction
| AddTaskAction
| DelTaskAction
| ToggleTaskAction
| FetchAddTaskAction;
