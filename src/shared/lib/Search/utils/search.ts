import { convertToString } from './convertToString';
import { getAllKeys } from './getAllKeys';
import { getFieldValue } from './getFieldValue';
import { nGramFuzzySearch } from './nGramFuzzySearch';

type TSearchStrategies = 'exact' | 'startsWith' | 'endsWith' | 'contains' | 'fuzzySearch';

type NestedKeys<T, Prev extends string = ''> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Date
      ? `${Prev}${Extract<K, string>}`
      : `${Prev}${Extract<K, string>}` | NestedKeys<T[K], `${Prev}${Extract<K, string>}.`>
    : `${Prev}${Extract<K, string>}`;
}[keyof T];

export type TSearchOption<T> = {
  fields: NestedKeys<T> | NestedKeys<T>[];
  matchType: TSearchStrategies;
};

export function search<T>(options: TSearchOption<T>) {
  const { fields, matchType } = options;

  return (data: T[], query: string) => {
    // Cleaning up the query. This makes the search case-insensitive and removes extra spaces.
    const trimmedQuery = String(query).trim().toLowerCase();

    if (!trimmedQuery) return data;

    return data.filter((item) => {
      // Determining fields to search
      const fieldsArray = fields
        ? Array.isArray(fields)
          ? fields
          : [fields]
        : getAllKeys<T>(item);

      // Filtering the data
      return fieldsArray.some((field) => {
        const fieldValue = getFieldValue(item, field as string);

        if (fieldValue === null) return false;

        const stringValue = convertToString(fieldValue).toLowerCase();

        switch (matchType) {
          case 'exact':
            return stringValue === trimmedQuery;
          case 'startsWith':
            return stringValue.startsWith(trimmedQuery);
          case 'endsWith':
            return stringValue.endsWith(trimmedQuery);
          case 'contains':
            return stringValue.includes(trimmedQuery);
          case 'fuzzySearch': {
            const threshold = 0.5; // Minimum similarity score required
            const score = nGramFuzzySearch(stringValue, trimmedQuery);
            return score >= threshold;
          }
          default:
            throw new Error(`Unsupported match type: ${matchType}`);
        }
      });
    });
  };
}
