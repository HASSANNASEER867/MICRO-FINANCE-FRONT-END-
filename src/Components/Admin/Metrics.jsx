import React from 'react';
import { Card, Row, Col, Statistic, Progress } from 'antd';

const Metrics = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic title="Total Beneficiaries" value={1523} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Assisted Today" value={128} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Pending Assistance" value={45} />
        </Card>
      </Col>
      <Col span={24} style={{ marginTop: '20px' }}>
        <Card>
          <h4>Assistance Completion</h4>
          <Progress percent={85} status="active" />
        </Card>
      </Col>
    </Row>
  );
};

export default Metrics;
