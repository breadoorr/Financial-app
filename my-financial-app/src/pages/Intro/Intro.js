// import React from "react";
import React, { useState } from 'react';
import axios from 'axios';
import './Intro.css'
import {useNavigate} from "react-router-dom";

const Intro = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData(prev => ({...prev, [event.target.name]: event.target.value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission to log in the user
    console.log(formData);
    axios.post('http://localhost:8081', formData)
        .then(res => {
          navigate('/');
          sessionStorage.setItem('user', formData.name);
          console.log(res);
          alert('Your account has been successfully created')
          // window.location.reload();
        })
        .catch(err => {
          console.log(err);
          alert("User already exists")
        });
    // Here you would typically send a request to your backend to authenticate the user
  };


    return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column Intro">
      <div className="inner cover text-center" style={{ maxWidth: '400px'}}>
        <h1 className="cover-heading">Create Your Account.</h1>
        <p className="lead">Join us and experience the best service. Sign up and start your journey today.</p>
        <form className="form-signup" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" name="name" placeholder="Full Name" value={formData.name}
              onChange={handleChange} required autoFocus />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" name="email" placeholder="Email address" value={formData.email}
              onChange={handleChange} required />
          </div>
          {/*<div className="mb-3">*/}
          {/*  <input type="password" className="form-control" placeholder="Password" required />*/}
          {/*</div>*/}
          <div className="mb-3">
            <input type="password" className="form-control" name="password" placeholder="Password" value={formData.password}
              onChange={handleChange} required />
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
        </form>
      </div>
    </div>
    );
}

export default Intro;