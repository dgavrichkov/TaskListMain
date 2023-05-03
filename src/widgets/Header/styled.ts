import styled from 'styled-components';

const Header = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'logo navi profile'
    'theme . profile';
  column-gap: 32px;
  row-gap: 16px;

  a {
    color: ${(props) => props.theme.colors.text || `#000`};
    &.is-active {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;

const Logo = styled.div`
  grid-area: logo;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  grid-area: navi;
`;

const SwitcherWrap = styled.div`
  justify-self: end;
  grid-area: theme;
`;

const ProfileArea = styled.div`
  grid-area: profile;

  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Styled = { Header, Nav, SwitcherWrap, ProfileArea, Logo };
