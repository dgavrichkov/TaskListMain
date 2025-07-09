import cn from 'classnames';
import { FC } from 'react';
import { ThemeSwitcher } from '../../features';
import { NavLink, Link } from 'react-router-dom';
import { Avatar, Button } from '../../shared/ui';
import { PATHS } from '../../shared/constants/paths';
import { useAuth } from '../../app/providers/AuthProvider';

import styles from './Header.module.scss';

type THeaderProps = {
  pageClass: string;
};

const MAIN_MENU_ITEMS = [
  {
    id: 1,
    label: 'Tasks',
    path: PATHS.TASKS,
  },
  {
    id: 2,
    label: 'Notes',
    path: PATHS.NOTES,
  },
  {
    id: 3,
    label: 'Posts',
    path: PATHS.POSTS,
  },
  {
    id: 4,
    label: 'Examples',
    path: PATHS.EXAMPLES,
  },
  {
    id: 5,
    label: 'Verbs',
    path: PATHS.VERBS,
  },
  {
    id: 6,
    label: 'Habits',
    path: PATHS.HABITS,
  },
];

export const Header: FC<THeaderProps> = ({ pageClass }) => {
  const { token, logout } = useAuth();

  return (
    <header className={cn(pageClass, styles.header)}>
      <h1>
        <Link to={PATHS.ROOT}>ToDo</Link>
      </h1>
      <div className={styles.nav}>
        {MAIN_MENU_ITEMS.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? styles.isActive : '')}
            key={item.id}
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="header__portal" id="header-portal"></div>
      <div className={styles.switch}>
        <ThemeSwitcher />
      </div>
      <div className={styles.profile}>
        {token ? (
          <>
            <Avatar />
            <NavLink
              className={({ isActive }) => (isActive ? styles.isActive : '')}
              to={PATHS.PROFILE}
            >
              Profile
            </NavLink>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <NavLink className={({ isActive }) => (isActive ? styles.isActive : '')} to="login">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};
