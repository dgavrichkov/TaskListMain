import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Styled } from './styled';

type TTagProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  isActive?: boolean;
};

export const Tag: FC<TTagProps> = ({ children, onClick, isActive = false }) => {
  return (
    <Styled.Tag isActive={isActive} type="button" onClick={onClick}>
      {children}
    </Styled.Tag>
  );
};
