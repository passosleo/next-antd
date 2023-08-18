"use client";
import { Button, ButtonProps } from "antd";

type Props = ButtonProps & {};

export function CustomButton({ children, type = "primary", ...rest }: Props) {
  return (
    <Button type={type} {...rest}>
      {children}
    </Button>
  );
}
