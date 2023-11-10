import { FunctionComponent, HTMLAttributes } from "react";
import cn from "classnames";

export type TabProps = {
  active?: boolean;
  children: string;
} & HTMLAttributes<HTMLDivElement>;

export const Tab: FunctionComponent<TabProps> = ({
  active = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "cursor-default rounded-full border border-gray-500 bg-white px-4 py-1 text-sm font-semibold text-gray-800 hover:border-[#67A0F0] active:border-hidden active:bg-gray-900 active:text-white",
        active && "border-hidden bg-gray-900 text-white",
      )}
      {...props}
    >
      {children}
    </div>
  );
};
