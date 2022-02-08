import { TasksAction, TasksActionTypes, ITask, TasksStateType } from "../../types/types";

const initialTasksState: TasksStateType = {
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
    },
    "task3": {
      id: "task3",
      name: "Third task",
      tag: "unusual",
      done: true
    }
  },
  idList: ["task1", "task2", "task3"]
};

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
