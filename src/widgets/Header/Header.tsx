import cn from 'classnames';
import { FC } from 'react';
import { ThemeSwitcher } from '../../features';
import { NavLink, Link } from 'react-router-dom';
import { Avatar, Button } from '../../shared/ui';
import { PATHS } from '../../shared/constants/paths';
import { useAuth } from '../../app/providers/AuthProvider';

import styles from './Header.module.scss';
import { MAIN_MENU_ITEMS } from './menuItems';

type THeaderProps = {
  pageClass: string;
};

export const Header: FC<THeaderProps> = ({ pageClass }) => {
  const { token, logout } = useAuth();

  return (
    <header className={cn(pageClass, styles.header)}>
      <div className={styles.logo}></div>
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
