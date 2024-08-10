import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { createUseStore } from '../../shared/lib/CustomStore';

export const useCountStore = createUseStore(0);

type TProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function CounterWithCustomStore(props: TProps) {
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
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
