import { ThemeSwitcher } from "./ThemeSwitcher";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  pageClass: string;
};

export const Header = ({ pageClass }: HeaderProps) => {
  return (
    <header className={pageClass}>
      <h1>ToDo</h1>
      <NavLink
        to="tasks"
        className={({ isActive }) => (isActive ? "is-active" : "")}
      >
        Tasks
      </NavLink>
      <NavLink
        to="notes"
        className={({ isActive }) => (isActive ? "is-active" : "")}
      >
        Notes
      </NavLink>
      <NavLink to="signup">Signup</NavLink>
      <ThemeSwitcher />
    </header>
  );
};
