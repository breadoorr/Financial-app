const {addIncome, getIncomes} = require("../controllers/income");
const initializeBudget = require("../middleware/initializeBudget");
const router = require('express').Router();

// router.use(initializeBudget);


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes);

module.exports = router;
