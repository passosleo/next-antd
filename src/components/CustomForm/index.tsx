import React from "react";
import { useCustomForm } from "./hooks/useCustomForm";
import { FormProvider, UseFormProps } from "react-hook-form";
import { z } from "zod";

type Props = {
  onSubmit: (data: any) => void;
  useFormProps?: Omit<UseFormProps, "resolver">;
  children: React.ReactNode;
  zodSchema?: z.ZodSchema<any>;
  resetOnSubmit?: boolean;
};

export function CustomForm({
  onSubmit: onSubmitProp,
  zodSchema,
  children,
  useFormProps,
  resetOnSubmit = false,
}: Props) {
  const { methods } = useCustomForm({ onSubmit, useFormProps, zodSchema });

  function onSubmit(data: any) {
    onSubmitProp(data);
    if (resetOnSubmit) methods.reset(undefined, { keepIsSubmitted: false });
  }

  return (
    <FormProvider {...methods}>
      <form
        className="flex w-full flex-col"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
      >
        {children}
      </form>
    </FormProvider>
  );
}
