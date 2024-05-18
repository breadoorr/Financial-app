const {addIncome, getIncomes} = require("../controllers/income");
const {getExpenses, addExpense} = require("../controllers/expense");
const {addUser, getUser, deleteUser, logout} = require("../controllers/user");
const router = require('express').Router();

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .post('/add-user', addUser)
    .post('/get-user', getUser)
    .get('/logout', logout)
    .delete('/delete-user', deleteUser);

module.exports = router