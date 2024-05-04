import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut, Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
);


const Reports = () => {


    // Sample data for the charts
    const expenseData = {
        labels: ['Rent', 'Food', 'Utilities', 'Entertainment', 'Transport'],
        datasets: [
            {
                label: 'Expenses',
                data: [500, 300, 100, 150, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    const incomeData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: 'Income',
                data: [1000, 1200, 1400, 1300, 1500],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    return (
        <div className="container mt-5">
            <h2>Financial Reports</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4>Expense Distribution</h4>
                    <Doughnut data={expenseData} />
                </div>
                <div className="col-md-6">
                    <h4>Income Over Time</h4>
                    <Line data={incomeData} />
                </div>
            </div>
        </div>
    );
};

export default Reports;
