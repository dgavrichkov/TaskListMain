import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Panel } from '../../shared/ui';
import { Header } from '../../widgets';
import styles from './Layout.module.scss';

export const Layout: FC = () => (
  <div className={styles.page}>
    <Panel>
      <Header pageClass="header" />
    </Panel>
    <main className="main">
      <Outlet />
    </main>
    <footer className="footer">
      <i>Just footer</i>
    </footer>
  </div>
);
