import { FunctionComponent, HTMLAttributes } from "react";

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
      className={`cursor-default rounded-full border border-gray-500 ${
        active
          ? "border-hidden bg-gray-900 text-white"
          : "bg-white text-gray-800"
      } px-4 py-1 text-sm font-semibold hover:border-[#67A0F0] active:border-hidden active:bg-gray-900 active:text-white`}
      {...props}
    >
      {children}
    </div>
  );
};
