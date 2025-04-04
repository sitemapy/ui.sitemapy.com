import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "../toaster";
import { useState } from "react";
import { Button } from "../../button/button";
import React from "react";

type Notification = {
  id: string;
  message: string;
  description?: string;
  timeout?: number;
  type?: "success" | "error";
};

const meta = {
  title: "Components/Atoms/Toaster",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToasterDemo = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  return (
    <>
      <Button
        onClick={() =>
          setNotifications([
            {
              id: Date.now().toString(),
              message: "Authentification failed",
              timeout: 1000,
              type: "error",
            },
            ...notifications,
          ])
        }
      >
        Add Notification
      </Button>
      <Toaster notifications={notifications} />
    </>
  );
};

export const Default: Story = {
  args: {
    notifications: [],
  },
  render: () => <ToasterDemo />,
};
