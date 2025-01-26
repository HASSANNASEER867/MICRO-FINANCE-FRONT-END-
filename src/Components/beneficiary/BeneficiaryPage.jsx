// src/components/beneficiary/BeneficiaryPage.jsx
import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const BeneficiaryPage = () => {
  return (
    <div>
      <Card>
        <Title level={2}>Beneficiary Dashboard</Title>
        <p>Here, you can check the status of your token and more!</p>
      </Card>
    </div>
  );
};

export default BeneficiaryPage;
