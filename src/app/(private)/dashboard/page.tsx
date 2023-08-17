"use client";
import { Button, DatePicker, Typography, Select, Radio } from "antd";

const { Title, Text } = Typography;

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center p-10 gap-5">
      <Button type="primary">Button</Button>
      <DatePicker format="DD/MM/YYYY" />
      <Title level={3}>Title</Title>
      <Text>Text</Text>
      <Select
        className="w-48"
        defaultValue="lucy"
        options={[
          { label: "Lucy", value: "lucy" },
          { label: "Jack", value: "jack" },
          { label: "Tom", value: "tom" },
        ]}
      />
      <Radio.Group>
        <Radio value="a">Hangzhou</Radio>
        <Radio value="b">Shanghai</Radio>
        <Radio value="c">Beijing</Radio>
        <Radio value="d">Chengdu</Radio>
      </Radio.Group>
    </main>
  );
}
