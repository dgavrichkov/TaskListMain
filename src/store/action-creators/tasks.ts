import { Dispatch } from "redux";
import nextId from "react-id-generator";
import { tasksNormalizer } from "../../utils/tasksNormalizer";

import { Task } from "../../types/Task";
import { TaskNew } from "../../types/TaskNew";
import { TasksActionTypes } from "../../types/TasksActionTypes";
import { TasksAction } from "../../types/TasksAction";

export function toggleTaskAction(task: Task) {
  return (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch({ type: TasksActionTypes.TOGGLE_TASK, payload: task.id });
    }
    catch(e) {
      console.log(e);
    }
  }
}

export function delTaskAction(id: string) {
  return (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch({ type: TasksActionTypes.DEL_TASK, payload: id });
    } 
    catch(e) {
      console.log(e);
    }
  }
}

export function addTaskAction(task: TaskNew) {
  const newTask = { id: nextId(), ...task, done: false };
  return (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch({
        type: TasksActionTypes.ADD_TASK,
        payload: newTask
      })
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
            payload: tasksNormalizer(response)
          })
        })
        .catch(() => {
          console.log("Произошла чудовищная ошибка");
        })
    } catch (e) {
      console.log("Произошла ошибка при загрузке тасков");
    }
  };
}