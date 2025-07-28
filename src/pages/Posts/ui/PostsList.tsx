import { useReducer, useEffect } from 'react';
import { TPost } from '../model/interfaces';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/Card';
import { BASE_URL } from '@/shared/api/client';

type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: TPost[] }
  | { status: 'error'; error: string };

type Action =
  | { type: 'FETCH' }
  | { type: 'RESOLVE'; payload: TPost[] }
  | { type: 'REJECT'; payload: string };

const initialState: State = { status: 'idle' };

function reducer(state: State, action: Action): State {
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

/** Interview Topic - fetch data on React components */
export const PostsList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'FETCH' });
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${BASE_URL}/posts`, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load posts from db json');
        }
        return res.json();
      })
      .then((data: TPost[]) => {
        dispatch({ type: 'RESOLVE', payload: data });
      })
      .catch((error: Error) => {
        dispatch({ type: 'REJECT', payload: error.message });
      });

    return () => {
      controller.abort();
    };
  }, []);

  switch (state.status) {
    case 'error':
      return <div>Ошибка: {state.error}</div>;
    case 'idle':
      return <div>Ожидание начала загрузки...</div>;
    case 'loading':
      return <div>Загрузка...</div>;
    case 'success':
      return (
        <div className="grid gap-4">
          {state.data.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <h3>{post.title}</h3>
              </CardHeader>
              <CardContent>{post.body}</CardContent>
              <CardFooter>
                <i>{post.author}</i>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
  }
};
