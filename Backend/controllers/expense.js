const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpense = async (req, res) =>  {
    const {title, amount, category, description, date} = req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        await expense.save();
        res.status(200).json({message: "expense added"});
    } catch(error) {
        res.status(500).json({message: "server error"});
    }

    console.log(expense);
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses);

    } catch (error) {
        res.status(500).json({message: "Server error"});

    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: "Expense deleted"});
        })
        .catch((err) => {
            res.status(500).json({message: "Server error"});
        })
}