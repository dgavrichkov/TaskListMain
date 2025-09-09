import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { createUseStore } from '../../shared/lib/CustomStore';
import { Button } from '@/shared/ui';

const INITIAL_STATE = 0;
// создается экземпляр хранилища; сам стор там в замыкании находится, и не пересоздается.
export const useCountStore = createUseStore<number>(INITIAL_STATE);

type TProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function CounterWithCustomStore(props: TProps) {
  // вызываем хук хранилища, получаем данные и сеттер данных
  const [count, setCount] = useCountStore();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div {...props}>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
