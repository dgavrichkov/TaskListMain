import { FC } from 'react';
import UserIcon from './user-icon.svg';
import styles from './Avatar.module.scss';

type TAvatarProps = {
  image?: string;
};

export const Avatar: FC<TAvatarProps> = ({ image }) => {
  return (
    <div className={styles.wrap}>{image ? <img alt="userpic" src={image} /> : <UserIcon />}</div>
  );
};
