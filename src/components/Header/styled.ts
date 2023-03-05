import styled from "styled-components";

const Header = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto 1fr auto;
  column-gap: 32px;

  a {
    color: ${(props) => props.theme.colors.text || `#000`};
    &.is-active {
      color: ${(props: any) => props.theme.colors.accent};
    }
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
`;

const SwitcherWrap = styled.div`
  justify-self: end;
`;

export const Styled = { Header, Nav, SwitcherWrap };
