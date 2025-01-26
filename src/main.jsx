import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';  // Importing App.jsx from the routes folder
// import 'antd/dist/antd.css'; // Importing Ant Design CSS
// import 'antd/dist/reset.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
