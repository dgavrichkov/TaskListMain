import React from 'react';
import { useDebounce } from '../../../hooks/useDebounce';

type TFilterFn<T> = (data: T[], query: string) => T[];

// TODO
// без search хук ничего не делает
// а еще с примитивами работать не будет

export function useSearch<T>(data: T | T[], query: string, ...filters: TFilterFn<T>[]): T[] {
  const debouncedQuery = useDebounce(query, 300);

  return React.useMemo(() => {
    const dataArray = Array.isArray(data) ? data : [data];

    try {
      // Apply each filter function in sequence
      const res = filters.reduce((acc, feature) => feature(acc, debouncedQuery), dataArray);
      return res;
    } catch (error) {
      console.error('Error applying search features:', error);
      return dataArray;
    }
  }, [data, debouncedQuery, filters]);
}
