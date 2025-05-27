import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Panel } from '../../shared/ui';
import { Header } from '../../widgets';
import { Styled } from './styled';

export const Layout: FC = () => (
  <Styled.Page>
    <Panel>
      <Header pageClass="header" />
    </Panel>
    <main className="main">
      <Outlet />
    </main>
    <footer className="footer">
      <i>Just footer</i>
    </footer>
  </Styled.Page>
);
