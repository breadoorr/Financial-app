import React, { useState } from 'react';
import {Link} from "react-router-dom";

const ExpenseForm = () => {
    const today = new Date();
    const [formData, setFormData] = useState({
        title: '',
        amount: 0,
        date: new Date(),
        category: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // Add logic to send data to the server
        const {title, amount, date, category, description} = formData;
        try {
            const res = await fetch('http://localhost:8000/add-expense', {
                    method: 'POST',
                    body: JSON.stringify({title, amount, date, category, description}),
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include",
                }
            );
        } catch (err) {

        }
    };

    return (
        <div className="container mt-4" style={{width: '100%'}}>
            <div className="d-flex align-items-center mb-4">
                <Link to={'/'}>
                    <i className="bi bi-arrow-left-square"
                       style={{fontSize: '2rem', cursor: 'pointer', color: 'black'}}></i>
                </Link>
            </div>
            <form onSubmit={handleSubmit} className="card card-body bg-light">
                <h3 className="mb-3">Add New Expense</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={formData.title}
                           onChange={handleChange} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input type="number" className="form-control" id="amount" name="amount" value={formData.amount}
                           onChange={handleChange} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" name="date" value={formData.date}
                           onChange={handleChange} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" className="form-control" id="category" name="category" value={formData.category}
                           onChange={handleChange} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" value={formData.description}
                              onChange={handleChange} required/>
                </div>

                <button type="submit" className="btn btn-primary">Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;