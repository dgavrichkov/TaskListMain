import { Dispatch } from "redux";
import nextId from "react-id-generator";

import { TNewTask, TasksAction, TasksActionTypes } from "../../types/types";

export function toggleTaskAction(id: string): TasksAction {
  return { type: TasksActionTypes.TOGGLE_TASK, payload: id };
}

export function delTaskAction(id: string): TasksAction {
  return { type: TasksActionTypes.DEL_TASK, payload: id };
}

export function addTaskAction(task: TNewTask) {
  const newTask = { id: nextId(), ...task, done: false };
  return (dispatch: Dispatch<TasksAction>) => {
    try {
      fetch("http://localhost:5000/tasks", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
        .then((response) => response.json())
        .then((response) => {
          dispatch({
            type: TasksActionTypes.ADD_TASK,
            payload: response
          })
        })
        .catch((error) => console.log(error));
    }
    catch(e) {
      console.log("случилось что-то плохое", e)
    }
  }
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