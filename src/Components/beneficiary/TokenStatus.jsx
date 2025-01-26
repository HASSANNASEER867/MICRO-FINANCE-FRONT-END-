import React from 'react';
import { Card, Badge } from 'antd';

const TokenStatus = ({ tokenNumber, status }) => {
  return (
    <Card>
      <h3>Token Number: {tokenNumber}</h3>
      <Badge status={status === 'Active' ? 'processing' : 'default'} text={status} />
    </Card>
  );
};

export default TokenStatus;

// Example usage:
// <TokenStatus tokenNumber="12345" status="Active" />
