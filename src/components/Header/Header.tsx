import { ThemeSwitcher } from "../ThemeSwitcher";
import { NavLink, Link } from "react-router-dom";
import { Styled } from './styled';
import { Avatar } from '../../shared/ui/Avatar';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { PATHS } from '../../shared/constants/paths';

type HeaderProps = {
  pageClass: string,
}

export const Header = ({ pageClass }: HeaderProps) => {
  const { user, logout } = useAuth();

  return (
    <Styled.Header className={pageClass}>
      <h1><Link to={PATHS.ROOT}>ToDo</Link></h1>
      <Styled.Nav>
        <NavLink
          to={PATHS.TASKS}
          className={({ isActive }) =>
            isActive ? "is-active" : ""
          }
        >Tasks</NavLink>
        <NavLink
          to={PATHS.NOTES}
          className={({ isActive }) =>
            isActive ? "is-active" : ""
          }
        >Notes</NavLink>
      </Styled.Nav>
      <Styled.SwitcherWrap>
        <ThemeSwitcher />
      </Styled.SwitcherWrap>
      <Styled.ProfileArea>
        {user ? (
          <>
            <Avatar />
            <NavLink
              to={PATHS.PROFILE}
              className={({ isActive }) =>
                isActive ? "is-active" : ""
              }
            >Profile</NavLink>
            <Button onClick={logout} >
              Logout
            </Button>
          </>
        ) : (
          <NavLink to="login" className={({ isActive }) =>
            isActive ? "is-active" : ""
          }>Login</NavLink>
        )}

      </Styled.ProfileArea>
    </Styled.Header>
  )
}
