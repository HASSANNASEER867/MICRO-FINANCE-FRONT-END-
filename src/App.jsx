import React from 'react';
import { Button, Card, Row, Col } from 'antd';

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card 1" bordered={false}>
            <p>Content for card 1</p>
            <Button type="primary">Click Me</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card 2" bordered={false}>
            <p>Content for card 2</p>
            <Button type="primary">Click Me</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card 3" bordered={false}>
            <p>Content for card 3</p>
            <Button type="primary">Click Me</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
