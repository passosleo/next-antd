"use client";
import { useAuthentication } from "@/contexts/auth";
import { Layout, Spin } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, router]);

  if (isLoading) {
    return (
      <Layout className="flex h-screen w-screen items-center justify-center">
        <Spin spinning size="large" />
      </Layout>
    );
  }

  return (
    <Layout className="bg-gray-200 h-screen flex items-center justify-center">
      {children}
    </Layout>
  );
}
