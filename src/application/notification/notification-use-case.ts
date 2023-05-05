import { useNotification } from "../../adaptors/notification/notificationAdaptor";

export function useToast() {
  const notificationService = useNotification();

  return {
    ...notificationService,
  };
}
