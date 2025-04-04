export type Navigation = {
  title: string;
  url: string;
  isActive?: boolean;
  icon: React.ElementType;
  items: NavigationItem[];
};

export type NavigationItem = {
  title: string;
  url: string;
};
