import { PropsWithChildren } from 'react';
// import { useAppSelector } from '../store';
import '../styles/global.css';
import '../styles/index.css';

// TODO - наладить темизацию
export const StyleProvider = ({ children }: PropsWithChildren) => {
  // const { theme } = useAppSelector((state) => state.theme);

  return <>{children}</>;
};
