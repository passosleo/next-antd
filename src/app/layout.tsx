"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ptBR from "antd/locale/pt_BR";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import "../../public/antd.min.css";
import "./globals.css";
import { theme } from "../theme";
import { AuthProvider } from "@/contexts/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <html lang="en">
      <body id="app" className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider locale={ptBR} theme={theme}>
            <StyleProvider hashPriority="high">
              <AuthProvider>{children}</AuthProvider>
            </StyleProvider>
          </ConfigProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
