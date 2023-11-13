import { useEffect, useState } from "react";

export const useToast = () => {
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

  return { showNotification, showState };
};
