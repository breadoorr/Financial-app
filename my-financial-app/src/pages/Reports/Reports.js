import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

const Reports = () => {
    const [expenseData, setExpenseData] = useState({ labels: [], datasets: [] });
    const [incomeData, setIncomeData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const expenseResponse = await fetch('http://localhost:8000/get-expenses', { method: 'GET', credentials: "include" });
                const expenseResults = await expenseResponse.json();
                updateExpenseChart(expenseResults);

                const incomeResponse = await fetch('http://localhost:8000/get-incomes', { method: 'GET', credentials: "include" });
                const incomeResults = await incomeResponse.json();
                updateIncomeChart(incomeResults);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const updateExpenseChart = (expenses) => {
        const categories = expenses.map(item => item.category);
        const amounts = expenses.map(item => item.amount);
        setExpenseData({
            labels: categories,
            datasets: [{
                label: 'Expenses',
                data: amounts,
                backgroundColor: categories.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`),
                borderColor: categories.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`),
                borderWidth: 1
            }]
        });
    };

    const updateIncomeChart = (incomes) => {
        const months = incomes.map(item => new Date(item.date).toLocaleString('default', { month: 'long' })); // Convert date to month name
        const amounts = incomes.map(item => item.amount);
        setIncomeData({
            labels: months,
            datasets: [{
                label: 'Income',
                data: amounts,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        });
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
