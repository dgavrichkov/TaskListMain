import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const throttle = require('lodash.throttle');

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(throttle(() => {
    console.log("BOOM");
}, 1000));