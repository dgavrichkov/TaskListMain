import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

export const store = configureStore({ reducer: reducers });

export const createReduxStore = (initialState = {}) =>
  configureStore({ reducer: reducers, preloadedState: initialState });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
