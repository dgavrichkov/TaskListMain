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
      </Styled.Nav>
      <div id="header-portal">
      </div>
      <Styled.SwitcherWrap>
        <ThemeSwitcher />
      </Styled.SwitcherWrap>
    </Styled.Header>
  )
}
