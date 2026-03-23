import { Input } from '@/shared/ui/Input';
import React, { useState, useEffect } from 'react';

// Создайте React-приложение с поиском персонажей по API
const API_URL = 'https://rickandmortyapi.com/api/character';

export const RickAndMortySearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    const run = async () => {
      try {
        const response = await fetch(`${API_URL}?name=${query}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Ошибка сети');
        const result = await response.json();

        console.log(result);

        setResults(result.results);
      } catch (e: any) {
        console.log(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(run, 500);

    return () => {
      // TODO: очистить таймер и отменить запрос
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="Поиск персонажей"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {loading && <p>Загрузка...</p>}
        {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
        <ul>
          {results.length > 0 &&
            results.map((character) => <li key={character.id}>{character.name}</li>)}
        </ul>
      </div>
    </div>
  );
};
