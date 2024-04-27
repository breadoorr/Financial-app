import React from 'react';
import './Dashboard.css';
import Intro from '../Intro/Intro';


const Dashboard = ( { username } ) => {
  // const username = sessionStorage.getItem('user');
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
