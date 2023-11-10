import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import {
  useForm,
  FormProvider,
  FieldValues,
  DefaultValues,
  SubmitHandler,
} from "react-hook-form";

export type FormProps = {
  defaultValues?:
    | DefaultValues<FieldValues>
    | { [x: string]: object | undefined };
  onSubmit?: SubmitHandler<FieldValues>;
  children: ReactNode;
} & HTMLAttributes<HTMLFormElement>;

export const Form: FunctionComponent<FormProps> = ({
  defaultValues,
  onSubmit,
  children,
  ...props
}) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit && methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};
