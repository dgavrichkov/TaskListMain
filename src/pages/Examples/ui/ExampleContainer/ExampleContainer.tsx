import { PropsWithChildren } from 'react';
import styles from './style.module.css';

type TExampleContainerProps = {
  columns?: number;
};

export const ExampleContainer = ({
  children,
  columns = 1,
}: PropsWithChildren<TExampleContainerProps>) => {
  return (
    <div className={styles.wrap} style={{ '--col-num': columns } as React.CSSProperties}>
      {children}
    </div>
  );
};
