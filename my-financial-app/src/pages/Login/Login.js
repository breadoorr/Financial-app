import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Intro/Intro.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailError.textContent = '';
        passwordError.textContent = '';

        const { email, password} = formData;

        try {
            const res = await fetch('http://localhost:8000/get-user', {
                    method: 'POST',
                    credentials:"include",
                    body: JSON.stringify({email, password}),
                    headers: {'Content-Type': 'application/json'}
                }
            );
            const data = await res.json();
            console.log(data);
            if(data.errors) {
                emailError.textContent = data.errors.email;
                passwordError.textContent = data.errors.password;
            }
            if(data.user) {
                window.location.assign('/');
            }
            // alert("User has been created successfully")
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className={'intro-overlay'}>
            <Header />
            <div className={'intro-content'}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '100vh' }}>
                    <h1 className="cover-heading">Welcome Back!</h1>
                    <p className="lead">Log in to your account to continue.</p>
                    <form className="form-login" onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '400px' }}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <div className='email error'></div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <div className='password error'></div>
                        </div>
                        <div className={'mb-3'}>
                            <Link to={'/signup'}>Don't have an account?</Link>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;