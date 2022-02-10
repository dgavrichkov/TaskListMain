import { State } from "../types/types";

export const saveState = (state: State) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      console.error(err);
    }
};