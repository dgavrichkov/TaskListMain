import { CSSProperties, FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { SidebarProvider, SidebarTrigger } from '@/shared/shadcn/ui/sidebar';
import { AppSidebar } from '@/widgets/AppSidebar/AppSidebar';
import { Toolbar } from '@/widgets/Toolbar/Toolbar';
import { Portal } from '@/shared/lib/Portal';
import { TOOLBAR_SLOTS } from '@/shared/constants/toolbarSlots';
import { WidgetsBar } from '@/widgets/WidgetsBar';

export const Layout: FC = () => (
  <SidebarProvider>
    <AppSidebar />
    <SidebarProvider
      style={
        {
          gridTemplateColumns: '1fr auto',
          '--sidebar-width': '320px',
          '--sidebar-width-mobile': '20rem',
        } as CSSProperties
      }
    >
      <div className={styles.page}>
        <Toolbar />
        <main className="main">
          <Outlet />
        </main>
        <Portal portalId={TOOLBAR_SLOTS.RIGHT}>
          <SidebarTrigger style={{ rotate: '180deg' }} variant={'secondary'} />
        </Portal>
      </div>
      <WidgetsBar />
    </SidebarProvider>
    <Portal portalId={TOOLBAR_SLOTS.SIDEBAR}>
      <SidebarTrigger />
    </Portal>
  </SidebarProvider>
);
