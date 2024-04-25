// import React, { useState } from 'react';
import React from 'react';

const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // sessionStorage.setItem('user', `${username}`);
    // sessionStorage.setItem('', `${username}`);
    alert("You have been loggen in");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        // value={username}
        name='username'
        placeholder="Enter username"
        required
      />
      <input
        type="text"
        // value={password}
        placeholder="Enter password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
