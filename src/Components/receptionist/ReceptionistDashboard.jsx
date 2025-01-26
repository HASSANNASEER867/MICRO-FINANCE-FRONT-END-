// import React from "react";
// import { Button, Table, Card, Typography, Row, Col } from "antd";

// const { Title, Paragraph } = Typography;

// const ReceptionistDashboard = () => {
//   const columns = [
//     {
//       title: "Beneficiary Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Token Number",
//       dataIndex: "token",
//       key: "token",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => (
//         <span
//           style={{
//             color: status === "Active" ? "green" : "orange",
//             fontWeight: "bold",
//           }}
//         >
//           {status}
//         </span>
//       ),
//     },
//   ];

//   const data = [
//     { key: 1, name: "John Doe", token: "A123", status: "Active" },
//     { key: 2, name: "Jane Smith", token: "B456", status: "Waiting" },
//   ];

//   return (
//     <div style={{ padding: "24px", background: "#f5f5f5" }}>
//       <Card
//         bordered={false}
//         style={{
//           borderRadius: "12px",
//           boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//           marginBottom: "24px",
//         }}
//       >
//         <Title level={2} style={{ textAlign: "center" }}>
//           Receptionist Dashboard
//         </Title>
//         <Paragraph style={{ textAlign: "center", marginBottom: "0" }}>
//           Manage beneficiaries by capturing details, assigning tokens, and
//           verifying initial data.
//         </Paragraph>
//       </Card>

//       <Row gutter={[16, 16]} justify="center">
//         <Col xs={24} lg={16}>
//           <Card
//             title="Beneficiary List"
//             bordered={false}
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <Table
//               columns={columns}
//               dataSource={data}
//               pagination={{ pageSize: 5 }}
//             />
//             <div style={{ textAlign: "center", marginTop: "16px" }}>
//               <Button type="primary" size="large">
//                 Assign Token
//               </Button>
//             </div>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ReceptionistDashboard;
// src/components/receptionist/ReceptionistDashboard.jsx

import React from 'react';
import { Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const ReceptionistDashboard = () => {
  const navigate = useNavigate(); // React Router hook to navigate to RegistrationPage

  const columns = [
    {
      title: 'Beneficiary Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Token Number',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const data = [
    { key: 1, name: 'John Doe', token: 'A123', status: 'Active' },
    { key: 2, name: 'Jane Smith', token: 'B456', status: 'Waiting' },
  ];

  return (
    <div>
      <h2>Receptionist Dashboard</h2>
      <Table columns={columns} dataSource={data} />
      <Button 
        type="primary" 
        style={{ marginTop: 16 }} 
        onClick={() => navigate('/register')}
      >
        Start Registration
      </Button>
    </div>
  );
};

export default ReceptionistDashboard;
