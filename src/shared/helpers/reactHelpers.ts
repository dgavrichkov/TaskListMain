import { useMemo } from 'react';

/** Тип для функции-сеттера реакт состояния */
export type ReactSetFunc<T> = React.Dispatch<React.SetStateAction<T>>;

/** Передает зависимости, сгруппированные в переданном объекте, в useMemo */
export const usePropsGroup = <T extends Record<string, unknown>>(groupObject: T): T => {
  const deps = Object.values(groupObject);

  return useMemo<T>(() => groupObject, deps);
};
