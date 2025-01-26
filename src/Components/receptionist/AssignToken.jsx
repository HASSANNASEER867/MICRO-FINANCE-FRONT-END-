import React from 'react';
import { Form, Input, Button } from 'antd';

const AssignToken = () => {
  const onFinish = (values) => {
    console.log('Assigned Token:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Beneficiary Name" name="name" rules={[{ required: true, message: 'Please enter the beneficiary name!' }]}>
        <Input placeholder="Enter beneficiary name" />
      </Form.Item>
      <Form.Item label="Token Number" name="token" rules={[{ required: true, message: 'Please enter the token number!' }]}>
        <Input placeholder="Enter token number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Assign Token
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AssignToken;
