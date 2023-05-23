import React, { FC } from 'react';
import { Styled } from './styled';

type TDialogProps = {
  open: boolean;
};

export const Dialog: FC<TDialogProps> = ({ children, open }) => {
  return <Styled.Dialog open={open}>{children}</Styled.Dialog>;
};
