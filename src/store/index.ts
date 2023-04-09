import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { saveState } from "../utils/saveState";
import { loadState } from "../utils/loadState";
import { rootReducer } from "./reducers";

const throttle = require("lodash.throttle");

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    const { tasks, tasksFilter } = store.getState();
    saveState({
      tasks,
      tasksFilter,
    });
  }, 1000)
);
