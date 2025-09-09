import { useSyncExternalStore } from 'react';

export type TListener = () => void;

function createStore<T>({ initialState }: { initialState: T }) {
  /** Array of listeners that our store will notify on every change of the store's state */
  let subscribers: TListener[] = [];
  /** store's state which we'll update when setState is called and then notify all of the store's subscribers of the update */
  let state = initialState;

  const notifyStateChanged = () => {
    // когда стор меняется, вызываются все onStoreChange
    // React по этому сигналу перечитает getSnapshot() и, если значение изменилось (Object.is), перерендерит компонент.
    subscribers.forEach((fn) => fn());
  };

  return {
    // функция для передачи в первый аргумент useSyncExternalStore
    // в listenerCallback сам React записывает свой колбэк-слушатель onStoreChange
    subscribe(listenerCallback: TListener) {
      // запушивает колбэк в массив подписчиков
      subscribers.push(listenerCallback);
      // возвращаем функцию очистки
      return () => {
        // из подписчиков удаляется переданный колбэк
        subscribers = subscribers.filter((listener) => listener !== listenerCallback);
      };
    },
    getSnapshot() {
      // просто возвращается текущий стейт.
      return state;
    },
    setState(newState: T) {
      state = newState;
      notifyStateChanged();
    },
  };
}

export function createUseStore<T>(initialState: T) {
  // store лежит себе в виде одного и того же объекта
  const store = createStore({ initialState });

  // возвращает функцию, вызов которой вернет новый кортеж с данными из того же стора
  return () => [useSyncExternalStore(store.subscribe, store.getSnapshot), store.setState] as const;
}
