"use client";
import { Typography, Table } from "antd";
import { useTemplates } from "./hooks/useTemplates";
import moment from "moment";
import { SelectOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function Templates() {
  const { templates, isLoading } = useTemplates();

  return (
    <>
      <Title level={2} className="text-heading mb-10">
        Templates
      </Title>
      <Table
        loading={isLoading}
        columns={[
          {
            title: "ID",
            dataIndex: "templateId",
            key: "templateId",
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "File",
            dataIndex: "fileUrl",
            key: "fileUrl",
            render: (value) => (
              <div>
                <a href={value} target="_blank" rel="noreferrer">
                  <SelectOutlined />
                </a>
              </div>
            ),
          },
          {
            title: "Updated At",
            dataIndex: "updatedAt",
            key: "updatedAt",
            render: (value) => moment(value).format("DD/MM/YYYY - HH:mm:ss"),
          },
          {
            title: "Created At",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (value) => moment(value).format("DD/MM/YYYY - HH:mm:ss"),
          },
        ]}
        dataSource={templates}
      />
    </>
  );
}
