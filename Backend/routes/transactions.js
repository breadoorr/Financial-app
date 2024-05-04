const {addIncome, getIncomes, deleteIncome} = require("../controllers/income");
const {deleteExpense, getExpenses, addExpense} = require("../controllers/expense");
const {addUser, getUser, deleteUser} = require("../controllers/user");
const router = require('express').Router();

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)
    .post('/add-user', addUser)
    .get('/get-user/:id', getUser)
    .delete('/delete-user/:id', deleteUser)

module.exports = router