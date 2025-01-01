import { FC } from 'react';
import { ThemeSwitcher } from '../../features';
import { NavLink, Link } from 'react-router-dom';
import { Styled } from './styled';
import { PATHS } from '../../shared/constants/paths';
import { HEADER_MENU } from './constants';
import { HeaderProfile } from './ui/HeaderProfile/HeaderProfile';

type THeaderProps = {
  pageClass: string;
};

export const Header: FC<THeaderProps> = ({ pageClass }) => {
  return (
    <Styled.Header className={pageClass}>
      <h1>
        <Link to={PATHS.ROOT}>ToDo</Link>
      </h1>
      <Styled.Nav>
        {HEADER_MENU.map((menuItem) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'is-active' : '')}
            key={menuItem.id}
            to={menuItem.path}
          >
            {menuItem.label}
          </NavLink>
        ))}
      </Styled.Nav>
      <div className="header__portal" id="header-portal"></div>
      <Styled.SwitcherWrap>
        <ThemeSwitcher />
      </Styled.SwitcherWrap>
      <Styled.ProfileArea>
        <HeaderProfile />
      </Styled.ProfileArea>
    </Styled.Header>
  );
};
