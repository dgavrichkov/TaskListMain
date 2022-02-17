import { TasksAction, TasksActionTypes, ITasksState } from "../../types/types";
import { combineReducers } from 'redux';

const initialTasksState: ITasksState = {
  data: {},
  idList: []
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
    case TasksActionTypes.FETCH_TASKS_SUCCESS:
      return action.payload.data;
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
    case TasksActionTypes.FETCH_TASKS_SUCCESS:
      return action.payload.idList;
    default:
      return state
  }
};

export const tasksReducer = combineReducers({
  data,
  idList
});