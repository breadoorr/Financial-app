import React, { useState } from 'react';
import axios from 'axios';
import './Intro.css'; // We'll create this CSS file
import {Link, useNavigate} from 'react-router-dom';
import image from './finances.jpg';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Intro = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');



    const handleSubmit = async (event) => {
        event.preventDefault();
        const {username, email, password} = formData;

        try {
            const res = await fetch('http://localhost:8000/add-user', {
                    method: 'POST',
                    body: JSON.stringify({username, email, password}),
                    headers: {'Content-Type': 'application/json'}
                }
            );

            emailError.textContent = '';
            passwordError.textContent = '';

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
        <div className="intro-overlay">
            <Header />
            <div className="intro-content">
                <div className="inner cover text-center mt-5">
                    <div className="row align-items-center" style={{marginBottom:'3vh'}}>
                        <div className="col-md-8">
                            <h1 style={{fontSize: '6vh'}}>Welcome to My Financial App</h1>
                        </div>
                        <div className="col-md-8">
                        <p className="lead">Your personal finance assistant.</p>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className="col-md-6">
                            <img src={image} alt="financial dashboard" width="60%"/>
                            <div style={{maxWidth: '700px', margin: '3vh', float: "left", minWidth: "300px"}}>
                                <p style={{fontSize: '3vh', fontWeight: 'lighter'}}>
                                    SmartFinance helps you track your expenses, budget wisely, and monitor your
                                    investments,
                                    all in one place. Take control of your financial future with intuitive tools and
                                    insights at your fingertips.
                                </p>
                            </div>

                        </div>

                        <div className="col-md-6 inner cover text-center mt-5"
                             style={{maxWidth: '400px', margin: 'auto'}}>
                            <h2>Create Your Account</h2>
                            <p className="lead">Join us and experience the best service. Sign up and start your journey
                                today.</p>
                            <form className="form-signup" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="text" className="form-control" name="username" placeholder="Username"
                                           value={formData.username} onChange={handleChange} required autoFocus/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" name="email"
                                           placeholder="Email address"
                                           value={formData.email} onChange={handleChange} required/>
                                    <div className='email error'></div>
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" name="password"
                                           placeholder="Password"
                                           value={formData.password} onChange={handleChange} required/>
                                    <div className='password error'></div>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Intro;
