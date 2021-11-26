import { Dispatch } from "redux";
import { tasksMock } from "../../mock/tasks";

import { TNewTask, TasksAction, TasksActionTypes, ITask } from "../../types/types";

export function toggleTaskAction(id: string): TasksAction {
  return { type: TasksActionTypes.TOGGLE_TASK, payload: id };
}

export function delTaskAction(id: string): TasksAction {
  return { type: TasksActionTypes.DEL_TASK, payload: id };
}

export function addTaskAction(task: TNewTask): TasksAction {
  return { type: TasksActionTypes.ADD_TASK, payload: task };
}

export function fetchTasks() {
  return (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch({ type: TasksActionTypes.FETCH_TASKS });
      fetch("http://localhost:5000/tasks")
        .then((response) => response.json())
        .then((response) => {
          dispatch({
            type: TasksActionTypes.FETCH_TASKS_SUCCESS,
            payload: response
          })
        });
    } catch (e) {
      dispatch({
        type: TasksActionTypes.FETCH_TASKS_ERROR,
        payload: "Произошла ошибка при загрузке тасков"
      });
    }
  };
}

export function fetchAddTaskAction(newTask: ITask) {
  return (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch({type: TasksActionTypes.FETCH_ADD_TASK});
      fetch("http://localhost:5000/tasks", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
        .then((response) => console.log(response));
    } 
    catch {

    }
  }
}
