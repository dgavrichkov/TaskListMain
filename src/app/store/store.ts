import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
