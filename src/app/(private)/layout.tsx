"use client";
import { Avatar, Layout, Menu, Spin } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Content, Header } from "antd/lib/layout/layout";
import { LogoutOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import { MenuItemType } from "antd/lib/menu/hooks/useItems";
import { useAuthentication } from "@/contexts/auth";
import { useEffect, useState } from "react";
import { Brand } from "@/components/Brand";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, logout, user } = useAuthentication();
  console.log("user", user);

  const menu: MenuItemType[] = [
    {
      key: "1",
      icon: <MailOutlined />,
      title: "templates",
      label: "Templates",
      onClick: () => router.push("/templates"),
    },
    {
      key: "2",
      icon: <UserOutlined />,
      title: "users",
      label: "Users",
      onClick: () => router.push("/users"),
    },
    {
      key: "3",
      icon: <LogoutOutlined />,
      title: "logout",
      label: "Logout",
      onClick: () => logout(),
    },
  ];

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
      <Header className="bg-background-dark flex items-center justify-between border-b-[1px] border-b-gray-dark">
        <Brand />
        <Avatar className="cursor-pointer bg-primary-dark">LP</Avatar>
      </Header>
      <Layout>
        <Sider className="bg-background-dark border-r-[1px] border-r-gray-dark py-5">
          <Menu
            defaultSelectedKeys={handleSelectedMenuOption()}
            className="bg-background-dark p-2 border-none"
            items={menu}
          />
        </Sider>
        <Content className="p-5">
          <main>{children}</main>
        </Content>
        {/* <Sider className="bg-background-dark"></Sider> */}
      </Layout>
      {/* <Footer className="bg-background-dark">footer</Footer> */}
    </Layout>
  );
}
