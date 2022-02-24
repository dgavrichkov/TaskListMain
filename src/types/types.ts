type Colors = {
  primary: string;
  accent: string;
  text: string;
}
type Shadows = {
  button: string;
  input: string;
  buttonInset: string;
}
export type ITheme = {
  colors: Colors;
  shadows: Shadows;
}

export type IThemes = {
  [key: string]: ITheme;
  light: ITheme;
  dark: ITheme;
}

export type ITask = {
  id: string;
  name: string;
  tag: string;
  done: boolean;
}

export type INote = {
  id: string,
  name: string,
  text: string,
  category: string | null
}

export type TNewTask = Pick<ITask, "name" | "tag">;

export type ITasksState = {
  data: {
    [name: string]: ITask
  },
  idList: string[]
}

export type State = {
  tasks: ITasksState,
  notes: any
}

export enum TasksActionTypes {
  FETCH_TASKS = "FETCH_TASKS",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_ADD_TASK = "FETCH_ADD_TASK",
  ADD_TASK = "ADD_TASK",
  DEL_TASK = "DEL_TASK",
  TOGGLE_TASK = "TOGGLE_TASK"
}

type FetchTasksAction = {
  type: TasksActionTypes.FETCH_TASKS;
}
type FetchTasksSuccessAction = {
  type: TasksActionTypes.FETCH_TASKS_SUCCESS;
  payload: ITasksState;
}
type FetchAddTaskAction = {
  type: TasksActionTypes.FETCH_ADD_TASK;
}
type AddTaskAction = {
  type: TasksActionTypes.ADD_TASK;
  payload: ITask;
}
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
  