import { Dispatch } from "redux";
import nextId from "react-id-generator";
import { tasksNormalizer } from "../../utils/tasksNormalizer";

import { TNewTask, TasksAction, TasksActionTypes, ITask } from "../../types/types";


// TODO
// как-то это все неловко. Хорошо бы понять, как использовать текущее состояние getState и dispatch вместе
export function toggleTaskAction(task: ITask) {
  return (dispatch: Dispatch<TasksAction>) => {
    try {
      // const updatedTask = {...task, done: !task.done};
      // fetch(`http://localhost:5000/tasks/${task.id}`, {
      //   method: "PUT",
      //   body: JSON.stringify(updatedTask),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   }
      // })
      //   .then((response) => {
      //     if(response.status === 200 && response.ok === true) {
      //       dispatch({ type: TasksActionTypes.TOGGLE_TASK, payload: task.id });
      //     }
      //   })
      //   .catch(e => console.log(e));

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
      // fetch(`http://localhost:5000/tasks/${id}`, {
      //   method: "DELETE",
      // })
      //   .then((response) => {
      //     if(response.status === 200 && response.ok === true) {
      //       dispatch({ type: TasksActionTypes.DEL_TASK, payload: id });
      //     }
      //   })
      dispatch({ type: TasksActionTypes.DEL_TASK, payload: id });

    } 
    catch(e) {
      console.log(e);
    }
  }
}

export function addTaskAction(task: TNewTask) {
  const newTask = { id: nextId(), ...task, done: false };
  return (dispatch: Dispatch<TasksAction>) => {
    try {
      // fetch("http://localhost:5000/tasks", {
      //   method: "POST",
      //   body: JSON.stringify(newTask),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   }
      // })
      //   .then((response) => response.json())
      //   .then((response) => {
      //     dispatch({
      //       type: TasksActionTypes.ADD_TASK,
      //       payload: response
      //     })
      //   })
      //   .catch((error) => console.log(error));
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
          dispatch({
            type: TasksActionTypes.FETCH_TASKS_SUCCESS,
            payload: []
          })
        })
    } catch (e) {
      console.log("Произошла ошибка при загрузке тасков");
    }
  };
}

// 