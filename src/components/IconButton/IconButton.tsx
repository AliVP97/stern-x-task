import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

export type IconButtonProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const IconButton: FunctionComponent<IconButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <div
      className="flex aspect-square w-8 shrink-0 items-center justify-center rounded-[4px] bg-white p-[5.333px] text-gray-600 hover:bg-gray-100 active:bg-gray-200"
      {...props}
    >
      {children}
    </div>
  );
};
