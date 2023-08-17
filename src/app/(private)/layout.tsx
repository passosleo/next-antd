"use client";
import { Layout, Menu, Spin } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { DashboardOutlined, SettingOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import { MenuItemType } from "antd/lib/menu/hooks/useItems";
import { useAuthentication } from "@/contexts/auth";
import { useEffect, useState } from "react";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu: MenuItemType[] = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      title: "dashboard",
      label: "Dashboard",
      onClick: () => router.push("/dashboard"),
    },
    {
      key: "2",
      icon: <SettingOutlined />,
      title: "settings",
      label: "Settings",
      onClick: () => router.push("/settings"),
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuthentication();

  function handleSelectedMenuOption() {
    const path = pathname.split("/")[1];
    const selected = menu.find((item) => item.title === path)?.key;
    if (!selected) return;
    return Array.from(selected.toString());
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
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
    <Layout className="min-h-screen">
      <Header className="bg-gray-300">header</Header>
      <Layout>
        <Sider className="bg-gray-200">
          <Menu
            defaultSelectedKeys={handleSelectedMenuOption()}
            className="bg-gray-200 p-2"
            items={menu}
          />
        </Sider>
        <Content className="p-5">{children}</Content>
        <Sider className="bg-gray-200"></Sider>
      </Layout>
      <Footer className="bg-gray-300">footer</Footer>
    </Layout>
  );
}
