import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Layout.Header>
      <Menu theme="light" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/admin">Admin</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/receptionist">Receptionist</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/department">Department</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
