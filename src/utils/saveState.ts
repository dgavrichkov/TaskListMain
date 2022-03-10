import { RootState } from "../store/reducers";

export const saveState = (state: RootState) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      console.error(err);
    }
};