import { ChevronsUpDown, LogOut } from "lucide-react";

import { Avatar } from "@/lib/components/atoms/avatar/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/lib/components/atoms/dropdown-menu/dropdown-menu";
import BoringAvatar from "boring-avatars";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/lib/components/atoms/sidebar/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { UserEntity } from "@sitemapy/interfaces";

type Props = {
  user: UserEntity;
  navigation: {
    title: string;
    url: string;
    icon: React.ElementType;
  }[];
  onLogout: () => void;
};

export function SidebarUser(props: Props) {
  const isMobile = useIsMobile();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton
            size="lg"
            asChild
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8 rounded-lg">
                <BoringAvatar
                  size={32}
                  name={props.user.email}
                  variant="beam"
                  colors={[
                    "#fee2e2",
                    "#fed7aa",
                    "#d9f99d",
                    "#a5f3fc",
                    "#f5d0fe",
                  ]}
                />
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {props.user.email}
                </span>
                <span className="truncate text-xs">{props.user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </DropdownMenuTrigger>
          </SidebarMenuButton>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <BoringAvatar
                    size={32}
                    name={props.user.email}
                    variant="beam"
                    colors={[
                      "#fee2e2",
                      "#fed7aa",
                      "#d9f99d",
                      "#a5f3fc",
                      "#f5d0fe",
                    ]}
                  />
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {props.user.email}
                  </span>
                  <span className="truncate text-xs">{props.user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {props.navigation.map((nav) => (
                <DropdownMenuItem key={nav.title}>
                  <nav.icon />
                  {nav.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={props.onLogout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
