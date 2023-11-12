import { FunctionComponent, HTMLAttributes } from "react";
import {
  UseControllerProps,
  useController,
  useFormContext,
} from "react-hook-form";

export type DescriptionProps = {
  label?: string | number | readonly string[] | undefined;
  required?: boolean;
  containerClassName?: string;
} & Omit<UseControllerProps, "control"> &
  HTMLAttributes<HTMLTextAreaElement>;

export const Description: FunctionComponent<DescriptionProps> = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  ...props
}) => {
  const { control } = useFormContext();

  const {
    field: { name: registeredName, value, onBlur, onChange, ref },
  } = useController({ name, rules, control, shouldUnregister, defaultValue });

  return (
    <textarea
      className={
        "w-[-webkit-fill-available] rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-normal leading-4 text-gray-600 placeholder:text-gray-500 focus:placeholder:text-[#99999B] focus-visible:outline-2 focus-visible:outline-blue-400"
      }
      name={registeredName}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
      {...props}
    />
  );
};
