"use client";
import { Button, DatePicker, Typography, Select } from "antd";

const { Title, Text } = Typography;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 gap-5">
      <Button type="primary">Button</Button>
      <DatePicker />
      <Title level={3}>Title</Title>
      <Text>Text</Text>
      <Select className="w-48" defaultValue="lucy" />
    </main>
  );
}
