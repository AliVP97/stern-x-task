import { FunctionComponent } from "react";
import cn from "classnames";

export type TagSizeType = "sm" | "md" | "lg";

export type TagVariantType = "info" | "danger" | "done";

export type TagProps = {
  size?: TagSizeType;
  variant?: TagVariantType;
  children: string;
};

const variantClassMapper: Record<TagVariantType, string> = {
  info: "bg-blue-100 text-gray-800",
  danger: "bg-red-100 text-gray-800",
  done: "bg-green-100 text-gray-800",
};

const sizeClassMapper: Record<TagSizeType, string> = {
  sm: "h-5 p-2 text-xs font-medium",
  md: "h-6 p-2 text-sm font-normal",
  lg: "h-8 py-2 px-3 text-base font-medium",
};

export const Tag: FunctionComponent<TagProps> = ({
  size = "md",
  variant = "info",
  children,
}) => {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-x-1 rounded-md",
        sizeClassMapper[size],
        variantClassMapper[variant],
      )}
    >
      {children}
    </div>
  );
};
