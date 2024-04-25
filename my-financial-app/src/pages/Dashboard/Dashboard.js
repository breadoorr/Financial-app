import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Dashboard.css';
import Intro from './pages/Intro/Intro';


function Dashboard() {
  const username = sessionStorage.getItem('user');
  return (
      <>
      {username ?
        (<div className="Dashboard">
        <h2>Dashboard</h2><p>Welcome, {username}</p></div>)
        :
        <Intro />}
      </>
  );
}

export default Dashboard;
