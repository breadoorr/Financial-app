import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Ensure you have corresponding CSS for styling

function Sidebar() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Menu</div>
      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item list-group-item-action bg-light">Home</Link>
        <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
        <Link to="/reports" className="list-group-item list-group-item-action bg-light">Reports</Link>
        <Link to="/settings" className="list-group-item list-group-item-action bg-light">Settings</Link>
      </div>
    </div>
  );
}

export default Sidebar;
