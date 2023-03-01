import { ThemeSwitcher } from "./ThemeSwitcher";
import { NavLink, Link } from "react-router-dom";

type HeaderProps = {
  pageClass: string,
}

export const Header = ({ pageClass }: HeaderProps) => {
  return (
    <header className={pageClass}>
      <h1><Link to="/TaskListMain">ToDo</Link></h1>
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
      <ThemeSwitcher />
    </header>
  )
}
