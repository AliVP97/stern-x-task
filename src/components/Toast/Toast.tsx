import { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import CircleTickIcon from "../../assets/Bold.svg?react";
import CloseIcon from "../../assets/Linear.svg?react";

export type ToastProps = {
  showState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  notificationText: string;
};

export const Toast: FunctionComponent<ToastProps> = ({
  showState,
  notificationText,
}) => {
  const [isShow, setIsShow] = showState;

  return createPortal(
    <div
      className={cn(
        "shadow-[1px 1px 8px 0px rgba(0, 0, 0, 0.08)] absolute bottom-12 right-8 w-[272px] origin-bottom-right items-center justify-between rounded-md bg-green-100 py-3 pe-1 ps-4",
        isShow ? "flex" : "hidden",
      )}
    >
      <div className="flex items-center gap-x-3">
        <CircleTickIcon />
        <div className="text-base font-bold text-gray-700">
          {notificationText}
        </div>
      </div>
      <CloseIcon
        className="aspect-square w-6"
        onClick={() => setIsShow(false)}
      />
    </div>,
    document.getElementById("overlay") as HTMLDivElement,
  );
};
