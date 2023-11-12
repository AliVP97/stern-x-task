import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import cn from "classnames";
import EditIcon from "../../assets/edit.svg?react";

export type ButtonSizeType = "xs" | "sm" | "md" | "lg";

export type ButtonVariantType = "solid" | "outline" | "delete-bold";

export type ButtonProps = {
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  leftIcon?: boolean;
  rightIcon?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClassMapper: (
  disabled: boolean,
) => Record<ButtonVariantType, string> = (disabled) => ({
  solid: [
    "bg-gradient-to-bl from-[#313135] to-[#181819] font-semibold text-white",
    !disabled &&
      "hover:from-[#19191C] active:from-gray-500 disable:from-[#313135] hover:to-[#080809] active:to-gray-500",
  ].join(" "),
  outline: [
    "border border-gray-200 text-gray-800",
    !disabled &&
      "hover:bg-gray-100 active:bg-gray-900 hover:border-gray-400 active:border-gray-900 active:text-gray-50",
  ].join(" "),
  "delete-bold": [
    "bg-red-500 text-red-50",
    !disabled && "hover:bg-red-600 active:bg-red-700 active:text-gray-50",
  ].join(" "),
});

const sizeClassMapper: Record<ButtonSizeType, string> = {
  xs: "",
  sm: "",
  md: "h-10 text-base font-medium",
  lg: "h-12 text-lg leading-6 font-bold",
};

export const Button: FunctionComponent<ButtonProps> = ({
  size = "md",
  variant = "solid",
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-x-2 rounded-md px-4 py-2.5",
        sizeClassMapper[size],
        variantClassMapper(props.disabled || false)[variant],
        props.disabled && "opacity-30",
        className,
      )}
      {...props}
    >
      {leftIcon && <EditIcon />}
      <div>{children}</div>
      {rightIcon && <div>{rightIcon}</div>}
    </button>
  );
};
