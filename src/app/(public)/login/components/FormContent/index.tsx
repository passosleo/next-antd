import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { Layout } from "antd";
import { useFormContext } from "react-hook-form";

export function FormContent() {
  const hookFormMethods = useFormContext();
  return (
    <Layout className="flex flex-col gap-10">
      <Layout className="flex flex-col gap-5">
        <CustomInput name="email" label="Email" />
        <CustomInput name="password" label="Password" type="password" />
      </Layout>

      <CustomButton htmlType="submit" className="h-10">
        Login
      </CustomButton>
    </Layout>
  );
}
