import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Ensure you have corresponding CSS for styling

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul className="sidebar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
