import { PATHS } from '@/shared/constants/paths';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/shared/shadcn/ui/sidebar';
import { Link } from 'react-router-dom';

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <figure style={{ width: 54 }}>
          <Link to={PATHS.ROOT}>
            <img
              alt="logo"
              className="rounded-lg"
              height="100"
              src="./dvergr-lantern-64.png"
              width="100"
            />
          </Link>
        </figure>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>Just footer</SidebarFooter>
    </Sidebar>
  );
};
