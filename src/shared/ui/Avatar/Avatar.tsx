import React, { FC } from 'react';
import { Styled } from './styled';
import { ReactComponent as UserIcon } from './user-icon.svg';

type TAvatarProps = {
  image?: string;
};

export const Avatar: FC<TAvatarProps> = ({ image }) => {
  return <Styled.Wrap>{image ? <img alt="userpic" src={image} /> : <UserIcon />}</Styled.Wrap>;
};
