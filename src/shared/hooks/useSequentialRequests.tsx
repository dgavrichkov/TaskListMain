import { useCallback, useRef } from 'react';

type TRequestFn<T> = (signal: AbortSignal) => Promise<T>;

const buildCancelableFetch = <T,>(requestFn: TRequestFn<T>) => {
  const abortController = new AbortController();

  return {
    run: () =>
      new Promise<T>((resolve, reject) => {
        if (abortController.signal.aborted) {
          reject(new Error('CanceledError'));
          return;
        }
        requestFn(abortController.signal).then(resolve, reject);
      }),
    cancel: () => {
      abortController.abort();
    },
  };
};

// хелпер, который помогает сохранить некое значение в рефе и его обновлять.
function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

/** This hook can cancel previous requests if they are still ongoing and only return the most recent data.  */
export function useSequentialRequest<T>(requestFn: TRequestFn<T>) {
  // сохраняем в рефе переданную функцию запроса
  const requestFnRef = useLatest(requestFn);
  // создаем реф для хранения выполняемого в данный момент запроса
  const currentRequest = useRef<{ cancel: () => void } | null>(null);

  // возвращаем мемоизированный колбэк, зависящий от функции запроса
  return useCallback(async () => {
    // если в рефе уже есть запрос, мы его отменяем;
    if (currentRequest.current) {
      currentRequest.current.cancel();
    }
    // конструируем объект запроса с ручками управления из функции запроса;
    const { run, cancel } = buildCancelableFetch(requestFnRef.current);
    // назначем текущую исполняемую функцию, объекта с методом отмены достаточно
    currentRequest.current = { cancel };
    // вернется промис из вызова run, и обнуляется текущая исполняемая функция в рефе
    return run().finally(() => {
      if (currentRequest.current?.cancel === cancel) {
        currentRequest.current = null;
      }
    });
  }, [requestFnRef]);
}
