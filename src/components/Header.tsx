import { ThemeSwitcher } from "./ThemeSwitcher"

type HeaderProps = {
    pageClass: string,
}

export const Header = ({pageClass} : HeaderProps) => {
    return (
        <header className={pageClass}>
          <h1>ToDo</h1>
          <ThemeSwitcher />
        </header>
    )
}