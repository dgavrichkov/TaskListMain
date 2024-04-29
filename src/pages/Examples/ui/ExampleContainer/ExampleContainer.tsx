import { FC } from "react";
import styles from './style.module.css';

export const ExampleContainer: FC = ({children}) => {
  return (
    <div className={styles.wrap}>{children}</div>
  )
};
