const {addUser, getUser, logout, deleteUser} = require("../controllers/user");
const {getBudget} = require("../controllers/budget");
// const initializeBudget = require("../middleware/initializeBudget");
const router = require("express").Router();

// router.use();

router.post('/add-user', addUser)
    .post('/get-user', getUser)
    .get('/logout', logout)
    .delete('/delete-user', deleteUser)
    .get('/get-budget', getBudget);


module.exports = router;