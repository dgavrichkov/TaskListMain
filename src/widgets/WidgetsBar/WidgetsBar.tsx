import { BodyMeasures } from '@/features/BodyMeasures';
import { SimpleTicker } from '@/features/Clock';
import { FoodLogWidget } from '@/features/FoodLog';
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

export const WidgetsBar = () => {
  return (
    <Sidebar side="right">
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <BodyMeasures />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>Evening Day Checklist</SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>Memento Mori</SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Food Log</SidebarGroupLabel>
          <SidebarGroupContent>
            <FoodLogWidget />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SimpleTicker />
      </SidebarFooter>
    </Sidebar>
  );
};
