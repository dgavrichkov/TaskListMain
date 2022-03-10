import { ThemeSwitcher } from "./ThemeSwitcher";
import {Link} from "react-router-dom";

type HeaderProps = {
    pageClass: string,
}

export const Header = ({pageClass} : HeaderProps) => {
    return (
        <header className={pageClass}>
          <h1>ToDo</h1>
          <Link to="/">Tasks</Link>
          <Link to="notes">Notes</Link>
          <ThemeSwitcher />
        </header>
    )
}