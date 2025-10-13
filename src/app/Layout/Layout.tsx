import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { SidebarProvider, SidebarTrigger } from '@/shared/shadcn/ui/sidebar';
import { AppSidebar } from '@/widgets/AppSidebar/AppSidebar';
import { Toolbar } from '@/widgets/Toolbar/Toolbar';
import { Portal } from '@/shared/lib/Portal';
import { TOOLBAR_SLOTS } from '@/shared/constants/toolbarSlots';

export const Layout: FC = () => (
  <SidebarProvider>
    <AppSidebar />
    <div className={styles.page}>
      <Toolbar />
      <main className="main">
        <Outlet />
      </main>
    </div>
    <Portal portalId={TOOLBAR_SLOTS.SIDEBAR}>
      <SidebarTrigger />
    </Portal>
  </SidebarProvider>
);
