const BudgetSchema = require("../models/BudgetModel")
const ExpenseSchema = require("../models/ExpenseModel")
const IncomeSchema = require("../models/IncomeModel")


exports.getBudget = async (req, res) => {
    const user_id = req.cookies.id;
    try {
        const budget = await BudgetSchema.get(user_id);
        res.status(200).json({ budget });
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }
};

// exports.updateBudget = async (user_id) => {
//     try {
//         const budget = await calculateBudget(user_id);
//         await BudgetSchema.updateByUserId(user_id, budget);
//         console.log(`Updated budget for user ${user_id}: ${budget}`);
//     } catch (error) {
//         console.error("Error updating budget:", error);
//     }
// };
//
// const calculateBudget = async (user_id) => {
//     try {
//         const incomes = await IncomeSchema.get(user_id);
//         const expenses = await ExpenseSchema.get(user_id);
//         //
//         // const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
//         // const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
//
//         const totalIncome = calculateTotalIncome(incomes);
//         const totalExpense = calculateTotalExpense(expenses);
//
//         return totalIncome - totalExpense;
//     } catch (error) {
//         console.error("Error calculating budget:", error);
//         throw error;
//     }
// };
//
// function calculateTotalIncome(incomes) {
//     let totalIncome = 0;
//     incomes.forEach(income => {
//         totalIncome += income.amount;
//         console.log(income.amount)
//     });
//     return totalIncome;
// }
//
// function calculateTotalExpense(expenses) {
//     let totalExpense = 0;
//     expenses.forEach(expense => {
//         totalExpense += expense.amount;
//     });
//     return totalExpense;
// }
//
// // Example usage (same as above)
//
