import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Badge } from '../Badge';

type TTagProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  isActive?: boolean;
};

export const Tag: FC<TTagProps> = ({ children, onClick, isActive = false }) => {
  return (
    <Badge variant={isActive ? 'default' : 'secondary'} onClick={onClick}>
      {children}
    </Badge>
  );
};
