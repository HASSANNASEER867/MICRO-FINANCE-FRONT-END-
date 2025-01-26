import React from 'react';
import { Select, Button, Card } from 'antd';

const AssistanceStatus = () => {
  const handleStatusChange = (value) => {
    console.log('Status updated to:', value);
  };

  return (
    <Card>
      <h3>Update Assistance Status</h3>
      <Select
        placeholder="Select Status"
        onChange={handleStatusChange}
        options={[
          { value: 'In Progress', label: 'In Progress' },
          { value: 'Completed', label: 'Completed' },
        ]}
        style={{ width: '200px', marginRight: '10px' }}
      />
      <Button type="primary">Update</Button>
    </Card>
  );
};

export default AssistanceStatus;
