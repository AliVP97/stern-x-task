import { FunctionComponent, HTMLAttributes } from "react";
import {
  UseControllerProps,
  useController,
  useFormContext,
} from "react-hook-form";
import cn from "classnames";

import AttentionIcon from "../../assets/attention.svg?react";

export type TextfieldProps = {
  label: string | number | readonly string[] | undefined;
} & Omit<UseControllerProps, "control"> &
  HTMLAttributes<HTMLInputElement>;

export const Textfield: FunctionComponent<TextfieldProps> = ({
  name,
  label,
  rules,
  shouldUnregister,
  defaultValue,
  ...props
}) => {
  const { control } = useFormContext();

  const {
    field: { name: registeredName, value, onBlur, onChange, ref },
    fieldState: { isTouched, error },
  } = useController({ name, rules, control, shouldUnregister, defaultValue });

  return (
    <div className={"group relative"}>
      <label
        className={cn(
          "pointer-events-none absolute left-4 origin-top-left translate-y-[18px] text-base font-normal leading-5 text-gray-400 transition-transform group-focus-within:translate-y-2.5 group-focus-within:scale-[0.625]",
          value && "translate-y-[10px] scale-[0.625]",
        )}
      >
        {label}
      </label>
      <input
        type={"text"}
        className={cn(
          "h-14 rounded-lg border border-gray-200 bg-white px-4 pb-3 pt-6 text-base font-normal leading-5 text-gray-700 focus-visible:outline-2 focus-visible:outline-blue-400",
          error && "border-2 border-red-600",
        )}
        name={registeredName}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        {...props}
      />
      {error && isTouched && (
        <div
          className={
            "mx-4 my-1.5 flex items-center gap-x-1 text-xs font-normal text-red-600"
          }
        >
          <AttentionIcon />
          <div>{error.message}</div>
        </div>
      )}
    </div>
  );
};

export default Text;
