import { FC } from 'react';
import { ThemeSwitcher } from '../../features';
import { NavLink, Link } from 'react-router-dom';
import { Styled } from './styled';
import { Avatar, Button } from '../../shared/ui';
import { PATHS } from '../../shared/constants/paths';
import { useAuth } from '../../app/providers/AuthProvider';

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
];

export const Header: FC<THeaderProps> = ({ pageClass }) => {
  const { token, logout } = useAuth();

  return (
    <Styled.Header className={pageClass}>
      <h1>
        <Link to={PATHS.ROOT}>ToDo</Link>
      </h1>
      <Styled.Nav>
        {MAIN_MENU_ITEMS.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'is-active' : '')}
            key={item.id}
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </Styled.Nav>
      <div className="header__portal" id="header-portal"></div>
      <Styled.SwitcherWrap>
        <ThemeSwitcher />
      </Styled.SwitcherWrap>
      <Styled.ProfileArea>
        {token ? (
          <>
            <Avatar />
            <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to={PATHS.PROFILE}>
              Profile
            </NavLink>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to="login">
            Login
          </NavLink>
        )}
      </Styled.ProfileArea>
    </Styled.Header>
  );
};
