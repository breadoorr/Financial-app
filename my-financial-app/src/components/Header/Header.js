import React from 'react';
import {Link, redirect, useNavigate} from 'react-router-dom';
import {logout} from "../Logout/Logout";


const Header = ( {login} ) => {
    // const username = sessionStorage.getItem('user');
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8000/logout', {
                method: 'GET',
                credentials: 'include'  // Important for including cookies if they're used for session management
            });
            if (response.ok) {
                console.log('Logged out successfully');
                window.location.assign('/signup');
                // Here you can also clear client-side state or local/session storage if needed
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><i className="bi bi-piggy-bank-fill"></i> My Financial App</Link>
                <div className="d-flex justify-content-end">
                    {login ? (
                        <>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                            {/*<Link className="btn btn-primary me-2" to="/login">Login</Link>*/}
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