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

export const Header: FC<THeaderProps> = ({ pageClass }) => {
  const { token, logout } = useAuth();

  return (
    <Styled.Header className={pageClass}>
      <h1>
        <Link to={PATHS.ROOT}>ToDo</Link>
      </h1>
      <Styled.Nav>
        <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to={PATHS.TASKS}>
          Tasks
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to={PATHS.NOTES}>
          Notes
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to={PATHS.POSTS}>
          Posts
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to={PATHS.EXAMPLES}>
          Examples
        </NavLink>
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
