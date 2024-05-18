import React from 'react';
import './Dashboard.css';
import Intro from '../Intro/Intro';
import {Link} from "react-router-dom";
import {ExpenseForm, IncomeForm} from "../../components/TransactionList/Transactions";


const Dashboard = ({ login }) => {
  // const username = sessionStorage.getItem('user');
  return (
      <div className="Dashboard">
          {login ? (
              <>

                <IncomeForm />
                <ExpenseForm />

              </>
          ) : (
              <Intro />
          )}
      </div>
  );
}

export default Dashboard;
