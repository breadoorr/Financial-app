import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const Header = ( {username} ) => {
  // const username = sessionStorage.getItem('user');
  const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem('user'); // Clear user session storage
        navigate('/', { replace: true }); // Navigate to home page without pushing to history stack
        window.location.reload();
    };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><i className="bi bi-piggy-bank-fill"></i> My Financial App</Link>
        <div className="d-flex justify-content-end">
          {username ? (
            <>
              <span className="navbar-text me-3">
                Welcome, {username}!
              </span>
               <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-primary me-2" to="/login">Login</Link>
               {/*<Link className="btn btn-secondary" to="/signup">Sign Up</Link>*/}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
