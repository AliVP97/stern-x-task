import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import {
  FormProvider,
  FieldValues,
  DefaultValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

export type FormProps = {
  defaultValues?:
    | DefaultValues<FieldValues>
    | { [x: string]: object | undefined };
  onSubmit?: SubmitHandler<FieldValues>;
  useFormMethods: UseFormReturn<FieldValues>;
  children: ReactNode;
} & HTMLAttributes<HTMLFormElement>;

export const Form: FunctionComponent<FormProps> = ({
  onSubmit,
  useFormMethods,
  children,
  ...props
}) => {
  return (
    <FormProvider {...useFormMethods}>
      <form
        onSubmit={onSubmit && useFormMethods.handleSubmit(onSubmit)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};
