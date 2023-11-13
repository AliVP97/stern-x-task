import { useContext } from "react";

import { ToastContext } from "./Toast.context";

export const useToastContext = () => {
  const toastHookValue = useContext(ToastContext);

  return toastHookValue;
};
