import { useEffect } from "react";
import { Toaster as Sonner, ToasterProps, toast } from "sonner";

type Props = ToasterProps & {
  notifications: {
    id: string;
    message: string;
    description?: string | null;
    timeout?: number;
    type?: "success" | "error";
  }[];
};

const Toaster = ({ ...props }: Props) => {
  const last_notification = props.notifications[0];
  const last_notification_id = last_notification?.id;

  useEffect(() => {
    if (last_notification_id) {
      toast[last_notification.type || "success"](last_notification.message, {
        duration: last_notification.timeout || 1000,
        description: last_notification.description,
      });
    }
  }, [last_notification_id]);

  return <Sonner closeButton className="toaster group" {...props} />;
};

export { Toaster };
