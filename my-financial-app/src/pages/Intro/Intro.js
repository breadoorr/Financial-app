import React, { useState } from 'react';
import axios from 'axios';
import './Intro.css'; // We'll create this CSS file
import {Link, useNavigate} from 'react-router-dom';
import image from './finances.jpg';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Intro = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8081', formData)
            .then((res) => {
                navigate('/');
                sessionStorage.setItem('user', formData.name);
                alert('Your account has been successfully created');
                window.location.reload();
            })
            .catch((err) => {
                alert('User already exists');
            });
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
                                    <input type="text" className="form-control" name="name" placeholder="Full Name"
                                           value={formData.name} onChange={handleChange} required autoFocus/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" name="email"
                                           placeholder="Email address"
                                           value={formData.email} onChange={handleChange} required/>
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" name="password"
                                           placeholder="Password"
                                           value={formData.password} onChange={handleChange} required/>
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
