import React, { use, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePathname, useRouter } from "next/navigation";
import { Layout, Spin } from "antd";

export function Authenticated({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { getStoredValue } = useLocalStorage();
  const isAuthenticated = getStoredValue("auth");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/login") {
      router.push("/login");
    }

    if (pathname === "/" && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router, pathname]);

  if (!mounted)
    return (
      <Layout className="flex h-screen w-screen items-center justify-center">
        <Spin spinning size="large" />
      </Layout>
    );

  if (isAuthenticated)
    return <Layout className="min-h-screen">{children}</Layout>;
}
