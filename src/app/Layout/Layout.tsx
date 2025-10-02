import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Panel } from '../../shared/ui';
import { Header } from '../../widgets';
import styles from './Layout.module.scss';
import { SidebarProvider, SidebarTrigger } from '@/shared/shadcn/ui/sidebar';
import { AppSidebar } from '@/widgets/AppSidebar/AppSidebar';

export const Layout: FC = () => (
  <SidebarProvider>
    <AppSidebar />
    <div className={styles.page}>
      <SidebarTrigger />
      <Panel>
        <Header pageClass="header" />
      </Panel>
      <main className="main">
        <Outlet />
      </main>
    </div>
  </SidebarProvider>
);
