import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission to log in the user
    console.log(formData);
    // Here you would typically send a request to your backend to authenticate the user
  };

  return (
    <div className="login-container d-flex h-100 p-3 mx-auto flex-column">
      <div className="inner login text-center">
        <h1 className="cover-heading">Welcome Back!</h1>
        <p className="lead">Log in to your account to continue.</p>
        <form className="form-login" onSubmit={handleSubmit}>
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
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;