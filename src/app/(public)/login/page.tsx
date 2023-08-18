"use client";
import { CustomForm } from "@/components/CustomForm";
import { useAuthentication } from "@/contexts/auth";
import { loginSchema } from "@/schemas/loginSchema";
import { Layout, Typography } from "antd";
import { FormContent } from "./components/FormContent";
import { useLogin } from "./hooks/useLogin";

export default function Login() {
  // const { login } = useAuthentication();
  const { login, isLoading } = useLogin();
  return (
    <Layout className="max-w-md w-full max-h-96 p-10 flex flex-col justify-between rounded-xl shadow-lg">
      <Typography.Title level={2} className="text-center text-gray-600">
        Login
      </Typography.Title>

      <CustomForm onSubmit={(data) => login(data)} zodSchema={loginSchema}>
        <FormContent isLoading={isLoading} />
      </CustomForm>
    </Layout>
  );
}
