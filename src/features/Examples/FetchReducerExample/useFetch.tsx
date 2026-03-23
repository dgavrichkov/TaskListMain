import { useEffect, useReducer, useRef } from 'react';

type FetchState<T> =
  | { status: 'idle'; requestId: number }
  | { status: 'loading'; requestId: number }
  | { status: 'success'; requestId: number; data: T }
  | { status: 'error'; message: string; requestId: number };

type FetchAction<T> =
  | { type: 'FETCH_START'; requestId: number }
  | { type: 'FETCH_SUCCESS'; payload: T; requestId: number }
  | { type: 'FETCH_ERROR'; payload: string; requestId: number }
  | { type: 'RESET' };

function fetchReducer<T>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> {
  switch (action.type) {
    case 'FETCH_START':
      return { status: 'loading', requestId: action.requestId };
    case 'FETCH_SUCCESS':
      if (action.requestId !== state.requestId) {
        return state;
      }

      return {
        status: 'success',
        data: action.payload,
        requestId: action.requestId,
      };
    case 'FETCH_ERROR':
      if (action.requestId !== state.requestId) {
        return state;
      }

      return {
        status: 'error',
        message: action.payload,
        requestId: action.requestId,
      };
    case 'RESET':
      return {
        status: 'idle',
        requestId: 0,
      };
    default:
      return state;
  }
}

export function useFetch<T>(url: string) {
  const [state, dispatch] = useReducer(fetchReducer<T>, { status: 'idle', requestId: 0 });

  const requestIdRef = useRef(0);

  useEffect(() => {
    const controller = new AbortController();

    requestIdRef.current += 1;
    const requestId = requestIdRef.current;

    const run = async () => {
      dispatch({ type: 'FETCH_START', requestId });

      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error('Request failed');
        }

        const data = await res.json();

        dispatch({ type: 'FETCH_SUCCESS', payload: data, requestId });
      } catch (e: unknown) {
        if (e instanceof DOMException && e.name === 'AbortError') {
          return;
        }

        const message = e instanceof Error ? e.message : 'Unknown error';

        dispatch({
          type: 'FETCH_ERROR',
          requestId,
          payload: message,
        });
      }
    };

    run();

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
}
