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

type Navigation = {
  title: string;
  url: string;
  icon: React.ElementType;
  items: NavigationItem[];
};

type NavigationItem = {
  title: string;
  url: string;
};

type Organization = {
  name: string;
  plan: string;
};

type Props = {
  children: React.ReactNode;
  organizations: Organization[];
  activeOrganization: Organization | null;
  onSelectOrganization: (organization: Organization) => void;
  navigation: Navigation[][];
  user: {
    name: string;
    email: string;
    avatar: string;
    navigation: {
      title: string;
      url: string;
      icon: React.ElementType;
    }[];
  };
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
            navigation={props.user.navigation}
            onLogout={props.onLogout}
          />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>{props.children}</SidebarInset>
    </SidebarProvider>
  );
}
