import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Intro from "../Intro/Intro";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import '../Intro/Intro.css'

const Login = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setFormData(prev => ({...prev, [event.target.name]: event.target.value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission to log in the user
    // console.log(formData);

    axios.post('http://localhost:8081/login', formData)
        .then(res => {
            if(res.data === "Failure") {
                alert("Account was not found");
            }
            else {
                sessionStorage.setItem('user', res.data[0].user_name);
                alert('You have successfully logged in');
                navigate('/');
                window.location.reload();
            }
          // console.log(res);

        })
        .catch(err => console.log(err));
    // Here you would typically send a request to your backend to authenticate the user
  };

  return (
      <div>
          <Header/>
          <div >
              <div className="inner login text-center" >
                <h1 className="cover-heading">Welcome Back!</h1>
                <p className="lead">Log in to your account to continue.</p>
                <form className="form-login" onSubmit={handleSubmit} style={{maxWidth: '400px', margin: 'auto'}}>
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
                    <div>
                        <Link to={'/'} >Don't have an account?</Link>
                    </div>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
                </form>
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default Login;