import { useFetch } from './useFetch';

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

export const FetchReducerComponent = () => {
  const fetchState = useFetch<{ results: TPerson[] }>(`${BASE_URL}${ENDPOINTS.PEOPLE}`);

  return (
    <section>
      <h2>Star Wars People</h2>
      {fetchState.status === 'loading' && <div>...LOADING...</div>}
      {fetchState.status === 'error' && <p>произошла ошибка :( - {fetchState.message}</p>}
      {fetchState.status === 'success' && (
        <ul>
          {fetchState.data.results.map((item: TPerson) => (
            <li key={item.name}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
