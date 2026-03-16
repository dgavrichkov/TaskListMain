import { useEffect, useReducer } from 'react';

const BASE_URL = 'https://swapi.dev/api';

const ENDPOINTS = {
  PEOPLE: '/people/',
  PEOPLE_ONE: '/people/:id/',
  PEOPLE_SCHEMA: '/people/schema/',
};

type TPerson = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: any[];
  species: any[];
  starships: any[];
  vehicles: any[];
};

type FetchState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: any }
  | { status: 'error'; message: string };

type FetchAction =
  | { type: 'FETCH' }
  | { type: 'RESOLVE'; payload: any }
  | { type: 'REJECT'; payload: any };

function fetchReducer(state: FetchState, action: FetchAction): FetchState {
  switch (state.status) {
    case 'idle':
      if (action.type === 'FETCH') return { status: 'loading' };
      return state;
    case 'loading':
      if (action.type === 'RESOLVE')
        return {
          status: 'success',
          data: action.payload,
        };
      if (action.type === 'REJECT')
        return {
          status: 'error',
          message: action.payload,
        };
      return state;
    default:
      return state;
  }
}

export const FetchReducerComponent = () => {
  const [fetchState, dispatch] = useReducer(fetchReducer, { status: 'idle' });

  useEffect(() => {
    const controller = new AbortController();
    const fetchPeople = async (): Promise<TPerson[]> => {
      const res = await fetch(`${BASE_URL}${ENDPOINTS.PEOPLE}`, {
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error('Something wrong with swapi call!');
      }

      const data = await res.json();

      return data.results;
    };

    dispatch({ type: 'FETCH' });

    fetchPeople()
      .then((results) => {
        dispatch({ type: 'RESOLVE', payload: results });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: 'REJECT', payload: e.message });
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section>
      <h2>Star Wars People</h2>
      {fetchState.status === 'loading' && <div>...LOADING...</div>}
      {fetchState.status === 'error' && <p>произошла ошибка :( - {fetchState.message}</p>}
      {fetchState.status === 'success' && (
        <ul>
          {fetchState.data.map((item: TPerson) => (
            <li key={item.name}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
