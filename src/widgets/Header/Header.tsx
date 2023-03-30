import { ThemeSwitcher } from "../../features";
import { NavLink, Link } from "react-router-dom";
import { Styled } from './styled';
import { Avatar, Button } from '../../shared/ui';
import { PATHS } from '../../shared/constants/paths';
import { useAuth } from '../../entities';

type HeaderProps = {
  pageClass: string,
}

export const Header = ({ pageClass }: HeaderProps) => {
  const { token, logout } = useAuth();

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
        <NavLink
          to="posts"
          className={({ isActive }) => isActive ? "is-active" : ""}
        >
          Posts
        </NavLink>
      </Styled.Nav>
      <div id="header-portal" className='header__portal'>
      </div>
      <Styled.SwitcherWrap>
        <ThemeSwitcher />
      </Styled.SwitcherWrap>
      <Styled.ProfileArea>
        {token ? (
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
