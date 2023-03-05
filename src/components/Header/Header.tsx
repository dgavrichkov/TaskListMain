import { ThemeSwitcher } from "../ThemeSwitcher";
import { NavLink, Link } from "react-router-dom";
import { Styled } from './styled';

type HeaderProps = {
  pageClass: string,
}

export const Header = ({ pageClass }: HeaderProps) => {
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
    </Styled.Header>
  )
}
