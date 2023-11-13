import { useEffect, useState } from "react";

export type UseToastReturnType = {
  showNotification: (notificationText: string) => void;
  showState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  notificationText: string;
};

export const useToast = (): UseToastReturnType => {
  const [notificationText, setNotificationText] = useState<string>("");
  const showState = useState<boolean>(false);
  const [isShow, setIsShow] = showState;

  const showNotification = (text: string) => {
    setNotificationText(text);
  };

  useEffect(() => {
    if (notificationText) {
      setIsShow(true);
    }
  }, [notificationText]);

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        setIsShow(false);
        setNotificationText("");
      }, 5000);
    }
  }, [isShow]);

  return { showNotification, showState, notificationText };
};
