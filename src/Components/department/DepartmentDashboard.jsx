import React, { useState } from "react";
import { Button, Table, Modal, Input, Select, Form, Card, Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

const DepartmentDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedToken, setSelectedToken] = useState(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Token Number",
      dataIndex: "token",
      key: "token",
    },
    {
      title: "Beneficiary Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Assistance Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          Update Status
        </Button>
      ),
    },
  ];

  const data = [
    { key: 1, token: "A123", name: "John Doe", status: "In Progress" },
    { key: 2, token: "B456", name: "Jane Smith", status: "Completed" },
  ];

  const handleEdit = (record) => {
    setSelectedToken(record);
    setIsModalVisible(true);
    form.setFieldsValue({ status: record.status, remarks: "" });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedToken(null);
  };

  const handleUpdate = (values) => {
    console.log("Updated Data:", {
      token: selectedToken.token,
      ...values,
    });
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "24px", background: "#f5f5f5" }}>
      <Card
        bordered={false}
        style={{
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginBottom: "24px",
        }}
      >
        <Title level={2} style={{ textAlign: "center" }}>
          Department Staff Dashboard
        </Title>
      </Card>

      <Card
        bordered={false}
        style={{
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
      </Card>

      <Modal
        title={`Update Status for Token: ${selectedToken?.token}`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdate}
          initialValues={{ status: "In Progress", remarks: "" }}
        >
          <Form.Item
            name="status"
            label="Assistance Status"
            rules={[{ required: true, message: "Please select a status" }]}
          >
            <Select>
              <Option value="In Progress">In Progress</Option>
              <Option value="Completed">Completed</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="remarks"
            label="Remarks"
            rules={[{ required: true, message: "Please enter remarks" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter remarks or actions taken" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DepartmentDashboard;
