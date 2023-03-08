import { ThemeSwitcher } from "../ThemeSwitcher";
import { NavLink, Link } from "react-router-dom";
import { Styled } from './styled';
import { Avatar } from '../../shared/ui/Avatar';
import { useAuth } from '../../hooks/useAuth';

type HeaderProps = {
  pageClass: string,
}

export const Header = ({ pageClass }: HeaderProps) => {
  const { user } = useAuth();

  return (
    <Styled.Header className={pageClass}>
      <h1><Link to="/TaskListMain">ToDo</Link></h1>
      <Styled.Nav>
        <NavLink
          to="tasks"
          className={({ isActive }) =>
            isActive ? "is-active" : ""
          }
        >Tasks</NavLink>
        <NavLink
          to="notes"
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
              to="profile"
              className={({ isActive }) =>
                isActive ? "is-active" : ""
              }
            >Profile</NavLink>
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
