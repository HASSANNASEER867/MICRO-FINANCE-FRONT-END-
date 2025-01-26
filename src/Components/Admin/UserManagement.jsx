import React from 'react';
import { Table, Button, Space, Popconfirm } from 'antd';

const UserManagement = () => {
  const users = [
    { key: 1, name: 'John Doe', role: 'Admin', email: 'john.doe@example.com' },
    { key: 2, name: 'Jane Smith', role: 'Receptionist', email: 'jane.smith@example.com' },
  ];

  const deleteUser = (key) => {
    console.log('Deleted user with key:', key);
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link">Edit</Button>
          <Popconfirm title="Are you sure?" onConfirm={() => deleteUser(record.key)}>
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} />;
};

export default UserManagement;
