import { HtmlHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Layouts.module.scss';

// TODO - Сделать нормальный лэйаут
export const StyledListPageWrap = ({
  children,
  ...rest
}: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={styles.oldpage} {...rest}>
      {children}
    </div>
  );
};
