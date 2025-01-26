import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

const ReportGeneration = () => {
  const onFinish = (values) => {
    console.log('Report Generated:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Report Name" name="reportName" rules={[{ required: true, message: 'Please input the report name!' }]}>
        <Input placeholder="Enter report name" />
      </Form.Item>
      <Form.Item label="Date Range" name="dateRange" rules={[{ required: true, message: 'Please select a date range!' }]}>
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Generate Report
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReportGeneration;
