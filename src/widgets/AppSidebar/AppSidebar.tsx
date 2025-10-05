import { PATHS } from '@/shared/constants/paths';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/shadcn/ui/sidebar';
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Button } from '@/shared/ui';
import { useAuth } from '@/app/providers/AuthProvider';
import { MAIN_MENU_ITEMS } from '@/shared/constants/mainMenu';

export const AppSidebar = () => {
  const { token, logout } = useAuth();

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
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MAIN_MENU_ITEMS.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <NavLink to={item.path}>
                    {({ isActive, isPending, isTransitioning }) => (
                      <SidebarMenuButton isActive={isActive}>{item.label}</SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div>
          {token ? (
            <>
              <Avatar />
              <NavLink to={PATHS.PROFILE}>Profile</NavLink>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
