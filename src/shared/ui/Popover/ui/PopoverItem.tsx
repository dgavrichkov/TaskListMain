import { ReactNode } from 'react';

type TProps = { children: ReactNode };

export const PopoverItem = ({ children }: TProps) => {
  return <div>{children}</div>;
};
