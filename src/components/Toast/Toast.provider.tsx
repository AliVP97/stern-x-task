import { FunctionComponent, ReactNode } from "react";

import { useToast } from "./useToast";
import { ToastContext } from "./Toast.context";
import { Toast } from "./Toast";

export type ToastProviderProps = { children: ReactNode };

export const ToastProvider: FunctionComponent<ToastProviderProps> = ({
  children,
}) => {
  const toastHookValue = useToast();

  return (
    <ToastContext.Provider value={toastHookValue}>
      {children}
      <Toast
        notificationText={toastHookValue.notificationText}
        showState={toastHookValue.showState}
      />
    </ToastContext.Provider>
  );
};
