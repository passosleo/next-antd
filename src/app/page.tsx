"use client";
import { useAuthentication } from "@/contexts/auth";
import { Layout, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const { isAuthenticated } = useAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <Layout className="flex h-screen w-screen items-center justify-center">
      <Spin spinning size="large" />
    </Layout>
  );
}
