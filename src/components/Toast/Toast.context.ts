import { createContext } from "react";

import { UseToastReturnType } from "./useToast";

export const ToastContext = createContext<UseToastReturnType>({
  notificationText: "",
  showNotification: () => {},
  showState: [false, () => {}],
});
