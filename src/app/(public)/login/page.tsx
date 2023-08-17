"use client";
import { useAuthentication } from "@/contexts/auth";
import { Button, Input, Layout, Typography } from "antd";

export default function Login() {
  const { login } = useAuthentication();
  return (
    <Layout className="max-w-md max-h-[400px] w-full p-5 flex flex-col justify-between rounded-xl">
      <Typography.Title level={2} className="text-center text-gray-600">
        Login
      </Typography.Title>

      <div className="flex flex-col gap-5 mb-6">
        <div className="flex flex-col gap-2">
          <Typography.Text>Username</Typography.Text>
          <Input name="username" />
        </div>

        <div className="flex flex-col gap-2">
          <Typography.Text>Password</Typography.Text>
          <Input name="password" type="password" />
        </div>
      </div>

      <Button type="primary" className="h-10" onClick={login}>
        Login
      </Button>
    </Layout>
  );
}
