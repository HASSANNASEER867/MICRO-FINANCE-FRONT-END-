import React, { useState } from 'react';
import { Input, Button, Card } from 'antd';

const TokenScanner = () => {
  const [token, setToken] = useState('');

  const handleScan = () => {
    console.log('Scanned Token:', token);
    // Add logic to fetch details
  };

  return (
    <Card>
      <h3>Scan Token</h3>
      <Input
        placeholder="Enter token number"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        style={{ width: '300px', marginRight: '10px' }}
      />
      <Button type="primary" onClick={handleScan}>
        Scan
      </Button>
    </Card>
  );
};

export default TokenScanner;
