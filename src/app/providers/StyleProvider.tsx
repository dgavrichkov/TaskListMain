import { PropsWithChildren } from 'react';
import { useAppSelector } from '../store';

// TODO - наладить темизацию
export const StyleProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useAppSelector((state) => state.theme);

  return <div>{children}</div>;
};
