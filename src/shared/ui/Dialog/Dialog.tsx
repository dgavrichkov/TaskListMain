import React, { PropsWithChildren } from 'react';
import { Styled } from './styled';

type TDialogProps = {
  open: boolean;
};

export const Dialog = ({ children, open }: PropsWithChildren<TDialogProps>) => {
  return <Styled.Dialog open={open}>{children}</Styled.Dialog>;
};
