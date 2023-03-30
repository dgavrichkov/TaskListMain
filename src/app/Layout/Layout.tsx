import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets';
import { Styled } from './styled';

export const Layout = () => (
  <Styled.Page>
    <Header pageClass="header" />
    <main className="main">
      <Outlet />
    </main>
    <footer className="footer">
      <i>Just footer</i>
    </footer>
  </Styled.Page>
);
