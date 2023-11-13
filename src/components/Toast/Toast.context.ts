import { createContext } from "react";

import { UseToastReturnType } from "./useToast";

export const ToastContext = createContext<UseToastReturnType>({
  showNotification: () => {},
  showState: [false, () => {}],
});
