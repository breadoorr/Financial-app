import React from 'react';
import { Link } from 'react-router-dom'; // Import the useAuth hook
// import Login from './pages/Login/Login';

const Header = () => {
  const username = sessionStorage.getItem('user');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><i class="bi bi-piggy-bank-fill"></i> My Financial App</Link>
        <div className="d-flex justify-content-end">
          {username ? (
            <>
              <span className="navbar-text me-3">
                Welcome, {username}!
              </span>
              {/* <button className="btn btn-danger" onClick={logout}>Logout</button> */}
            </>
          ) : (
            <>
              <Link className="btn btn-primary me-2" to="/login">Login</Link>
              {/* <Link className="btn btn-secondary" to="/signup">Sign Up</Link> */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
