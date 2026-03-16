import { useEffect, useReducer } from 'react';

type FetchState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

type FetchAction<T> =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'RESET' };

function fetchReducer<T>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> {
  switch (action.type) {
    case 'FETCH_START':
      return { status: 'loading' };
    case 'FETCH_SUCCESS':
      return {
        status: 'success',
        data: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        status: 'error',
        message: action.payload,
      };
    case 'RESET':
      return {
        status: 'idle',
      };
    default:
      return state;
  }
}

export function useFetch<T>(url: string) {
  const [state, dispatch] = useReducer(fetchReducer<T>, { status: 'idle' });

  useEffect(() => {
    const controller = new AbortController();

    const run = async () => {
      dispatch({ type: 'FETCH_START' });

      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error('Request failed');
        }

        const data = await res.json();

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (e: any) {
        if (e.name === 'AbortError') {
          return;
        }
        dispatch({ type: 'FETCH_ERROR', payload: e.message });
      }
    };

    run();

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
}
