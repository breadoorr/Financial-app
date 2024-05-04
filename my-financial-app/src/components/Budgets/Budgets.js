import {useState} from "react";

const BudgetForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        amount: '',
    });
    const handleChange = (event) => {
        setFormData(prev => ({...prev, [event.target.name]: event.target.value}))
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        console.log(`Budget Name: ${formData.name}, Amount: ${formData.amount}`);
    };

    return (
        <div className="container mt-3">
            <div className="border border-3 border-secondary-subtle rounded p-3" style={{maxWidth: '600px', margin: '0 auto'}}>
                <h3>Create Budget</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="budgetName" className="form-label">
                            Budget Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="budgetName"
                            placeholder="Enter budget name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">
                            Amount
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="amount"
                            placeholder="Enter amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
// export default BudgetForm;

const Budgets = () => {

    return (
        <div>
        Budget
        </div>
    )
}
export { BudgetForm, Budgets };