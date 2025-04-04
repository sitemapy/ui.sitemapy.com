import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Layout } from "../layout";
import { BookOpen, Settings2 } from "lucide-react";
import { Bot } from "lucide-react";
import { SquareTerminal } from "lucide-react";
import { Navigation } from "../../../../../types";

const meta = {
  title: "Templates/Layout",
  component: Layout,
  parameters: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

const organizations = [
  {
    name: "Acme Inc",
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    plan: "Free",
  },
];

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://github.com/shadcn.png",
  navigation: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
    },
  ],
};

const navMain: Navigation[] = [
  {
    title: "Playground",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "History",
        url: "#",
      },
      {
        title: "Starred",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
  {
    title: "Models",
    url: "#",
    icon: Bot,
    items: [
      {
        title: "Genesis",
        url: "#",
      },
      {
        title: "Explorer",
        url: "#",
      },
      {
        title: "Quantum",
        url: "#",
      },
    ],
  },
  {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Introduction",
        url: "#",
      },
      {
        title: "Get Started",
        url: "#",
      },
      {
        title: "Tutorials",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "General",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Billing",
        url: "#",
      },
      {
        title: "Limits",
        url: "#",
      },
    ],
  },
];

export const Default: Story = {
  args: {
    children: <div>Hello</div>,
    organizations,
    activeOrganization: organizations[0],
    onSelectOrganization: () => alert("Organization selected"),
    navigation: [navMain],
    user,
    onAddOrganization: () => alert("Add organization"),
    onLogout: () => alert("Logout"),
  },
};
