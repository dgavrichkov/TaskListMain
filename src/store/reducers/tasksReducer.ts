import { TasksAction, TasksActionTypes, ITask, TasksStateType } from "../../types/types";
import { combineReducers } from 'redux';

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

const data = (state = initialTasksState.data, action: TasksAction) => {
  switch(action.type) {
    case TasksActionTypes.ADD_TASK:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case TasksActionTypes.DEL_TASK:
      const {[action.payload]: removedTask, ...restTasks} = state;
      return restTasks;
    case TasksActionTypes.TOGGLE_TASK:
      const toggledTask = state[action.payload];
      return {
        ...state,
        [action.payload]: {...toggledTask, done: !toggledTask.done}
      }
    default:
      return state
  }
};

const idList = (state = initialTasksState.idList, action: TasksAction) => {
  switch(action.type) {
    case TasksActionTypes.ADD_TASK:
      return [...state, action.payload.id];
    case TasksActionTypes.DEL_TASK:
      return state.filter(task => task !== action.payload);
    default:
      return state
  }
};

export const tasksReducer = combineReducers({
  data,
  idList
});
