"use client";
import { CustomForm } from "@/components/CustomForm";
import { useAuthentication } from "@/contexts/auth";
import { loginSchema } from "@/schemas/loginSchema";
import { Layout } from "antd";
import { FormContent } from "./components/FormContent";
import { Brand } from "@/components/Brand";

export default function Login() {
  const { login, isLoggingIn } = useAuthentication();
  return (
    <Layout className="max-w-md w-full max-h-96 p-10 flex flex-col justify-between rounded-xl shadow-lg">
      <Brand className="mx-auto" />

      <CustomForm onSubmit={(data) => login(data)} zodSchema={loginSchema}>
        <FormContent isLoading={isLoggingIn} />
      </CustomForm>
    </Layout>
  );
}
