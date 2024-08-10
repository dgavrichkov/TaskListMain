import { PropsWithChildren } from 'react';
import styles from './style.module.css';

export const ExampleContainer = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrap}>{children}</div>;
};
