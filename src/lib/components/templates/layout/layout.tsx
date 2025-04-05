import { SidebarProvider } from "@/lib";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarRail,
} from "@/lib/components/atoms/sidebar/sidebar";
import { OrganizationSwitcher } from "@/lib/components/organisms/organization-switcher/organization-switcher";
import { SidebarUser } from "@/lib/components/organisms/sidebar-user/sidebar-user";
import { SidebarNav } from "@/lib/components/organisms/sidebar-nav/sidebar-nav";
import { OrganizationEntity, UserEntity } from "@sitemapy/interfaces";
import { Navigation } from "@/types";

type Props = {
  children: React.ReactNode;
  organizations: OrganizationEntity[];
  activeOrganization: OrganizationEntity | null;
  onSelectOrganization: (organization: OrganizationEntity) => void;
  navigation: Navigation[][];
  user: UserEntity;
  userDropdownNavigation: {
    url: string;
    icon: React.ElementType;
    title: string;
  }[];
  onAddOrganization: () => void;
  onLogout: () => void;
};

export function Layout(props: Props) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <OrganizationSwitcher
            organizations={props.organizations}
            activeOrganization={props.activeOrganization}
            onSelectOrganization={props.onSelectOrganization}
            onAddOrganization={props.onAddOrganization}
          />
        </SidebarHeader>
        <SidebarContent>
          {props.navigation.map((nav, index) => (
            <SidebarNav key={index} items={nav} />
          ))}
        </SidebarContent>
        <SidebarFooter>
          <SidebarUser
            user={props.user}
            navigation={props.userDropdownNavigation}
            onLogout={props.onLogout}
          />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>{props.children}</SidebarInset>
    </SidebarProvider>
  );
}
