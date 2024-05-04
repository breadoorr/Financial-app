import React from 'react';
import './Dashboard.css';
import Intro from '../Intro/Intro';
import {BudgetForm, Budgets} from "../../components/Budgets/Budgets";


const Dashboard = ( { username } ) => {
  // const username = sessionStorage.getItem('user');
  return (
      <>
      {username ?
        (<div className="Dashboard">
        <h2>Budgets</h2>
            <BudgetForm />
            <Budgets />
        </div>)
        :
        <Intro />}
      </>
  );
}

export default Dashboard;
