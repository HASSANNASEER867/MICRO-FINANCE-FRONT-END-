import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import AdminDashboard from '../Components/Admin/AdminDashboard'; // Import admin component
import ReceptionistDashboard from '../Components/receptionist/ReceptionistDashboard'; // Receptionist component
import DepartmentDashboard from '../Components/department/DepartmentDashboard'; // Department component
import Header from '../Components/shared/Header'; // Shared Header
import Footer from '../Components/shared/Footer'; // Shared Footer
import RegistrationPage from '../Components/receptionist/RegistrationPage';
import DepartmentStaffInteraction from '../Components/department/DepartmentStaffInteraction';
const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout.Content style={{ padding: '20px' }}>
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/receptionist" element={<ReceptionistDashboard />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/department" element={<DepartmentDashboard />} />
            <Route path="/department-interaction" element={<DepartmentStaffInteraction />} />
            {/* Add more routes for other pages */}
          </Routes>
        </Layout.Content>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
