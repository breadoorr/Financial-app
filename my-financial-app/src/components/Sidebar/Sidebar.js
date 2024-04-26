import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // If you're using Bootstrap Icons
import './Sidebar.css';

function Sidebar() {
    const username = sessionStorage.getItem('user');
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{width: "280px", height: "98vh"}}>
        <span className="fs-4">Sidebar</span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {/* <li className="nav-item">
          <NavLink to="/" className="nav-link " aria-current="page">
            <i className="bi bi-house-door-fill"></i> Home
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/" className="nav-link"aria-current="page">
            <i className="bi bi-house-door-fill"></i> Dashboard
          </NavLink>
        </li>
        {username && (
          <>
            <li>
              <NavLink to="/reports" className="nav-link text-white">
                <i className="bi bi-bar-chart-line-fill"></i> Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className="nav-link text-white">
                <i className="bi bi-gear-fill"></i> Settings
              </NavLink>
            </li>
          </>
        )}
        
      </ul>
      <hr />
      <div className="dropdown">
        {/* <a href="#" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1"> */}
          {/* Dropdown items */}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default Sidebar;
