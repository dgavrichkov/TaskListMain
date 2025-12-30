import { Context, createContext, useContext } from 'react';

/** Создает контекст без необходимости задания начальных значений */
export function createAccurateContext<T>() {
  return createContext<T | null>(null);
}

export const useAccurateContext = <T>(ctx: Context<T | null>) => {
  const value = useContext(ctx);

  if (value === null) {
    throw new Error('Пустое значение контекста');
  }

  return value;
};
