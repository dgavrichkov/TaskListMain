import { PropsWithChildren } from 'react';
import styles from './style.module.css';
import { Card } from '@/shared/shadcn/ui/card';

type TExampleContainerProps = {
  columns?: number;
};

export const ExampleContainer = ({
  children,
  columns = 1,
}: PropsWithChildren<TExampleContainerProps>) => {
  return (
    <Card className={styles.wrap} style={{ '--col-num': columns } as React.CSSProperties}>
      {children}
    </Card>
  );
};
