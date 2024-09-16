import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import Intro from '../Intro/Intro';
import {Link} from "react-router-dom";
// import {Income} from 'components/Budgets/Income';


const Dashboard = ({ login }) => {
    const [budget, setBudget] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBudget();
    }, []);

    const fetchBudget = async () => {
        // try {
            const response = await fetch('http://localhost:8000/get-budget');
            const data = await response.json();
            console.log(response.status)
            if (response.status === 200) {
                // setBudget(data.budget.amount);
                console.log(data);
            }
        //     } else {
        //         setError('Errofetching budget');
        //     }
        // } catch (error) {
        //     setError('Error fetching budget');
        // }
    };


    return (
        <div className="Dashboard">
            {login ? (
                <>

                    <div className={'border'}><h1>Total balance</h1><h3 className={'budget'}>{budget !== null ? ` $${budget}` : (error ? error : 'Loading...')}</h3></div>
                    <div>
                    <Link className={'btn btn-dark btn-block m-lg-4 p-3'} to={'/add-income'}>Add new Income</Link>
                    </div>
                    <div>
                    <Link className={'btn btn-dark btn-block m-lg-4 p-3'} to={'/add-expense'}>Add new Expense</Link>
                    </div>


                </>
            ) : (
                <Intro />
            )}
        </div>
    );
}

export default Dashboard;