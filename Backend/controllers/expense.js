const ExpenseSchema = require("../models/ExpenseModel")
const {updateBudget} = require("./budget");

exports.addExpense = async (req, res) =>  {
    const {title, amount, category, description, date} = req.body;
    const user_id = req.cookies.id;
    // console.log(id);
    const expense = ExpenseSchema({
        user_id,
        title,
        amount,
        category,
        description,
        date
    })

    try {
        await expense.save();
        await updateBudget(user_id);
        res.status(200).json({message: "expense added"});
    } catch(error) {
        res.status(500).json({message: "server error"});
    }

    // console.log(expense);
}

exports.getExpenses = async (req, res) => {
    const id = req.cookies.id;
    // console.log(id);
    try {
        const expenses = await ExpenseSchema.get(id);
        res.status(200).json(expenses);

    } catch (error) {
        res.status(500).json(error);

    }
}