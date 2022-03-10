import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { saveState } from "../utils/saveState";
import { loadState } from "../utils/loadState";
import { rootReducer } from "./reducers";

const throttle = require('lodash.throttle');

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

// TODO - попробовать разделить сохранение тасков и заметок
store.subscribe(throttle(() => {
    const {tasks, notes, theme, filter} = store.getState();
    saveState({
        tasks,
        notes,
        theme,
        filter
    })
}, 1000));