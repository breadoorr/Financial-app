const {addExpense, getExpenses} = require("../controllers/expense");
const initializeBudget = require("../middleware/initializeBudget");
const router = require("express").Router();

// router.use(initializeBudget);

router.post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)

module.exports = router;