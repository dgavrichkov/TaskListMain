// https://www.youtube.com/watch?v=spsrzqZcgWM
// https://github.com/y0na24/zustand-diy

import { useSyncExternalStore } from 'react';

type SetStateAction<V> = ((prevState: V) => Partial<V>) | Partial<V>;

type Listener<V> = (state: V, prevState: V) => void;

type StoreApi<V> = {
  getState: () => V;
  getInitialState: () => V;
  setState: (action: SetStateAction<V>) => void;
  subscribe: (listener: Listener<V>) => () => void;
  // типизация с перегрузкой функции
  use(): V;
  use<Selected>(selector: (state: V) => Selected): Selected;
  use<Selected>(selector?: (state: V) => Selected): Selected | V;
};

type StoreCreator<V> = (set: (action: SetStateAction<V>) => void, get: () => V) => V;

export const createStoreDiy = <V>(storeCreator: StoreCreator<V>): StoreApi<V> => {
  type Api = StoreApi<V>;

  let state: V;
  const listeners = new Set<Listener<V>>();

  const getState: Api['getState'] = () => state;
  const getInitialState: Api['getInitialState'] = () => initialState;

  const setState: Api['setState'] = (action) => {
    const nextState = typeof action === 'function' ? action(state) : action;

    if (!Object.is(state, nextState)) {
      const prevState = state;

      state =
        typeof nextState !== 'object' || nextState === null
          ? nextState
          : Object.assign({}, state, nextState);

      listeners.forEach((listener) => listener(state, prevState));
    }
  };

  const subscribe: Api['subscribe'] = (listener) => {
    listeners.add(listener);

    return () => listeners.delete(listener);
  };

  function use(): V;
  function use<Selected>(selector: (state: V) => Selected): Selected;
  function use<Selected>(selector?: (state: V) => Selected): V | Selected {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSyncExternalStore(subscribe, () => (selector ? selector(getState()) : getState()));
  }

  // с таким синтаксисом сетаются сразу две переменные
  const initialState = (state = storeCreator(setState, getState));

  return {
    getInitialState,
    getState,
    setState,
    subscribe,
    use,
  };
};
