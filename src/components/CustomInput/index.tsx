import React, { InputHTMLAttributes, ReactElement } from "react";
import { iterateObject } from "@/utils/functions/object";
import { Controller, RegisterOptions } from "react-hook-form";
import { ConnectForm } from "../ConnectForm";
import { Input as InputAntd, Typography } from "antd";
import { useCustomInput } from "./hooks/useCustomInput";
import { ErrorHookForm, ErrorsHookForm } from "@/types/react-hook-form";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  customRef?: React.LegacyRef<HTMLInputElement>;
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
  handleLeftIconClick?: () => void;
  handleRightIconClick?: () => void;
  preventEnterSubmit?: boolean;
  rules?: RegisterOptions;
  hideError?: boolean;
  error?: string;
  label?: string;
};

export function CustomInput({
  preventEnterSubmit = true,
  onKeyDown: onKeyDownProp,
  customRef,
  hideError,
  error,
  rules,
  label,
  size,
  rightIcon,
  leftIcon,
  handleLeftIconClick,
  handleRightIconClick,
  ...rest
}: InputProps) {
  const { inputRef, onKeyDown } = useCustomInput({
    customRef,
    preventEnterSubmit,
    onKeyDownProp,
  });
  return (
    <ConnectForm>
      {({ control, formState }) => {
        const id = rest.id || rest.name || "input";
        const idParts = id.split(".");
        const { errors } = formState;
        const hasError = iterateObject<ErrorHookForm>(
          idParts,
          errors as ErrorsHookForm
        );
        return (
          <Controller
            defaultValue={rest.defaultValue || ""}
            control={control}
            rules={rules}
            name={id}
            render={({ field: { ref, ...fields } }) => (
              <div
                className={`${
                  rest.type === "hidden" || rest.type === "file"
                    ? "hidden"
                    : "flex"
                } flex-col w-full min-w-fit`}
              >
                {label && (
                  <Typography.Text className="mb-1">{label}</Typography.Text>
                )}
                <InputAntd
                  prefix={
                    leftIcon ? (
                      <span
                        onClick={handleLeftIconClick || (() => {})}
                        className={`
                        flex w-4 h-4 justify-center items-center
                        ${handleLeftIconClick ? "cursor-pointer" : ""}
                      `}
                      >
                        {leftIcon}
                      </span>
                    ) : (
                      <></>
                    )
                  }
                  suffix={
                    rightIcon ? (
                      <span
                        onClick={handleRightIconClick || (() => {})}
                        className={`
                        flex w-4 h-4 justify-center items-center
                        ${handleRightIconClick ? "cursor-pointer" : ""}
                      `}
                      >
                        {rightIcon}
                      </span>
                    ) : (
                      <></>
                    )
                  }
                  ref={(e) => {
                    ref(e);
                    inputRef.current = e as React.LegacyRef<HTMLInputElement>;
                  }}
                  onKeyDown={onKeyDown}
                  {...fields}
                  {...rest}
                />
                {!hideError && (hasError || error) && (
                  <div
                    data-testid={"messageValidation"}
                    className={
                      "flex flex-row gap-2 items-center pl-4 h-max mt-2"
                    }
                  >
                    <label className={"text-red-500 text-xs leading-4"}>
                      {(hasError?.message || error) as string}
                    </label>
                  </div>
                )}
              </div>
            )}
          />
        );
      }}
    </ConnectForm>
  );
}
