import { useEffect, useReducer } from 'react';

export type State<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

type Action<T> =
  | { type: 'FETCH' }
  | { type: 'RESOLVE'; payload: T }
  | { type: 'REJECT'; payload: string };

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'FETCH':
      return { status: 'loading' };
    case 'RESOLVE':
      return { status: 'success', data: action.payload };
    case 'REJECT':
      return { status: 'error', error: action.payload };
    default:
      return state;
  }
}

type Props = {
  url: string;
};

export function useFetch<T>({ url }: Props) {
  const [fetchState, dispatch] = useReducer(reducer<T>, { status: 'idle' });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load');
        }
        return res.json();
      })
      .then((data: T) => {
        dispatch({ type: 'RESOLVE', payload: data });
      })
      .catch((error: Error) => {
        dispatch({ type: 'REJECT', payload: error.message });
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { fetchState };
}
