import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // If you're using Bootstrap Icons
import './Sidebar.css';

const Sidebar = () => {
    // const username = sessionStorage.getItem('user');
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{width: "20%", minHeight: '100vh'}}>
        <span className="fs-4">Sidebar</span>
      <hr />
      <ul className="nav nav-pills flex-column" style={{width: "90%", minWidth: "50px"}}>
        <li style={{width: "90%", minWidth: "50px"}}>
          <NavLink to="/" className="nav-link"aria-current="page" >
            <i className="bi bi-house-door-fill"></i>
          </NavLink>
        </li>
            <li style={{width: "90%", minWidth: "50px"}}>
              <NavLink to="/reports" className="nav-link text-white">
                <i className="bi bi-bar-chart-line-fill"></i>
              </NavLink>
            </li>
            {/* <li style={{width: "90%", minWidth: "50px"}}>
              <NavLink to="/settings" className="nav-link text-white">
                <i className="bi bi-gear-fill"></i>
              </NavLink>
            </li> */}
      </ul>
      <hr />
    </div>
  );
}

export default Sidebar;
