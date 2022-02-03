import { TasksAction, TasksActionTypes, ITask, TasksStateType } from "../../types/types";

// TODO - видимо, придется выносить в отдельные редьюсеры ошибку и статус загрузки - они задумывались как глобальное состояние, а не относящиеся конкретно к таскам.

// const initialTasksState: TasksState = {
//   tasks: []
// };
const initialTasksState: TasksStateType = {
  tasks: {
    data: {
      "task1": {
        id: "task1",
        name: "First task",
        tag: "regular",
        done: false
      },
      "task2": {
        id: "task2",
        name: "Second task",
        tag: "regular",
        done: false
      }
    },
    idList: ["task1", "task2"]
  }
};

// Нормализация данных
// - массив айдишников задач
// - объект data, где ключи - айди задач, значени - объекты задач.
// - В таком случае можно будет обновлять в хранилище одиночную задачу, не пересоздавая весь массив
// - тогда добавление или удаление будет состоять из двух частей - изменение массива айдишников и добавление/удаление объекта задачи

export const tasksReducer = (
  state = initialTasksState,
  action: TasksAction
) => {
  switch (action.type) {
    // case TasksActionTypes.FETCH_TASKS:
    //   return { ...state };
    // case TasksActionTypes.FETCH_TASKS_SUCCESS:
    //   return { ...state, tasks: action.payload };
    // case TasksActionTypes.ADD_TASK:
    //   return { ...state, tasks: [...state.tasks, action.payload] };
    // case TasksActionTypes.DEL_TASK:
    //   return {
    //     ...state,
    //     tasks: state.tasks.filter((task: ITask) => task.id !== action.payload)
    //   };
    // case TasksActionTypes.TOGGLE_TASK:
    //   const newTasks = state.tasks.map((task: ITask) => {
    //     if (task.id === action.payload) {
    //       task.done = !task.done;
    //     }
    //     return task;
    //   });
    //   return {
    //     ...state,
    //     tasks: newTasks
    //   };
    default:
      return state;
  }
};