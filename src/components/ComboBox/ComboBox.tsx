import { FunctionComponent, HTMLAttributes } from "react";
import {
  UseControllerProps,
  useController,
  useFormContext,
} from "react-hook-form";
import cn from "classnames";

import ArrowIcon from "../../assets/arrow.svg?react";

export type ComboBoxProps = {
  label?: string | number | readonly string[] | undefined;
  data: {
    label: string | number | readonly string[] | undefined;
    value: string | number | readonly string[] | undefined;
  }[];
  required?: boolean;
} & Omit<UseControllerProps, "control"> &
  HTMLAttributes<HTMLSelectElement>;

export const ComboBox: FunctionComponent<ComboBoxProps> = ({
  name,
  label,
  data,
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
    <div className={"group relative"}>
      <label
        className={cn(
          "pointer-events-none absolute left-4 origin-top-left translate-y-[18px] text-base font-normal leading-5 text-gray-400 transition-transform group-focus-within:translate-y-2.5 group-focus-within:scale-[0.625]",
          value && "translate-y-[9.75px] scale-[0.625]",
        )}
      >
        {label}
      </label>
      <ArrowIcon className="pointer-events-none absolute right-4 top-[18px] text-gray-400" />
      <select
        className={
          "h-14 w-[-webkit-fill-available] appearance-none rounded-lg border border-gray-200 bg-white px-4 pb-3 pt-6 text-base font-normal leading-5 text-gray-700 focus-visible:outline-2 focus-visible:outline-blue-400"
        }
        name={registeredName}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        {...props}
      >
        <option value={""} hidden />
        {data?.map(({ label, value }) => (
          <option
            className="flex items-center bg-white px-3 pb-[12.5px] pt-[11.5px] text-sm font-normal leading-4 text-gray-800 hover:bg-[#ECEDF0] active:bg-[#CACACD]"
            key={`${value}`}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
