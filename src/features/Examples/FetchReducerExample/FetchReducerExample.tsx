import { useEffect, useReducer, useState } from 'react';

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

export const FetchReducer = () => {
  // логика состояния размазана по коду
  // состояние легко сломать, возможны недопустимые комбинации
  const [peopleData, setPeopleData] = useState<TPerson[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

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

    setStatus('loading');

    fetchPeople()
      .then((results) => {
        setPeopleData(results);
        setStatus('success');
      })
      .catch((e) => {
        console.log(e);
        setStatus('error');
        setError(e.message);
      });

    return () => {
      controller.abort();
      setStatus('idle');
    };
  }, []);

  return (
    <section>
      <h2>Star Wars People</h2>
      {status === 'loading' && <div>...LOADING...</div>}
      {status === 'error' && error && <p>произошла ошибка :( - {error}</p>}
      {status === 'success' && peopleData.length > 0 && (
        <ul>
          {peopleData?.map((item) => (
            <li key={item.name}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
