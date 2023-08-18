"use client";
import { Typography, Table } from "antd";
import moment from "moment";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useUsers } from "./hooks/useUsers";

const { Title } = Typography;

export default function Users() {
  const { users, isLoading } = useUsers();

  return (
    <>
      <Title level={2} className="text-heading mb-10">
        Users
      </Title>
      <Table
        loading={isLoading}
        columns={[
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Role",
            dataIndex: "role",
            key: "role",
            filters: [
              { text: "admin", value: "admin" },
              { text: "user", value: "user" },
            ],
            onFilter: (value, record) => record.role === value,
          },
          {
            title: "Email Verified",
            dataIndex: "emailVerified",
            key: "emailVerified",
            filters: [
              { text: "Yes", value: true },
              { text: "No", value: false },
            ],
            onFilter: (value, record) => record.emailVerified === value,
            render: (value) =>
              value ? (
                <CheckCircleOutlined className="text-success" />
              ) : (
                <CloseCircleOutlined className="text-alert" />
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
          {
            title: "Enabled",
            dataIndex: "isEnabled",
            key: "isEnabled",
            filters: [
              { text: "Yes", value: true },
              { text: "No", value: false },
            ],
            onFilter: (value, record) => record.isEnabled === value,
            render: (value) =>
              value ? (
                <CheckCircleOutlined className="text-success" />
              ) : (
                <CloseCircleOutlined className="text-alert" />
              ),
          },
        ]}
        dataSource={users}
        rowKey={(record) => record.userId}
      />
    </>
  );
}
