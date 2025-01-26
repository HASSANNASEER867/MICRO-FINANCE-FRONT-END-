// src/components/receptionist/RegistrationPage.jsx

import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { v4 as uuidv4 } from 'uuid'; // To generate a unique token

const RegistrationPage = () => {
  const [token, setToken] = useState('');

  const onFinish = (values) => {
    // Generate a unique token for the beneficiary
    const uniqueToken = uuidv4().slice(0, 6); // Shorten token length
    setToken(uniqueToken);

    // Display the token in the confirmation message
    notification.success({
      message: 'Registration Successful',
      description: `Beneficiary ${values.name} has been assigned Token: ${uniqueToken}`,
    });

    // Optionally send token via SMS or email here (simulated by the notification)
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Beneficiary Registration</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item 
          label="CNIC" 
          name="cnic" 
          rules={[{ required: true, message: 'Please enter CNIC!' }]}
        >
          <Input placeholder="Enter CNIC" />
        </Form.Item>

        <Form.Item 
          label="Name" 
          name="name" 
          rules={[{ required: true, message: 'Please enter the name!' }]}
        >
          <Input placeholder="Enter Name" />
        </Form.Item>

        <Form.Item 
          label="Phone Number" 
          name="phone" 
          rules={[{ required: true, message: 'Please enter phone number!' }]}
        >
          <Input placeholder="Enter Phone Number" />
        </Form.Item>

        <Form.Item 
          label="Address" 
          name="address" 
          rules={[{ required: true, message: 'Please enter the address!' }]}
        >
          <Input placeholder="Enter Address" />
        </Form.Item>

        <Form.Item 
          label="Purpose of Visit" 
          name="purpose" 
          rules={[{ required: true, message: 'Please enter the purpose of visit!' }]}
        >
          <Input placeholder="Enter Purpose of Visit" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register Beneficiary
          </Button>
        </Form.Item>
      </Form>

      {token && (
        <div style={{ marginTop: '20px' }}>
          <h3>Assigned Token: {token}</h3>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
