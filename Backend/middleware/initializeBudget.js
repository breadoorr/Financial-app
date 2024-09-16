// const BudgetSchema = require('../models/BudgetModel');
//
// const initializeBudget = async (req, res, next) => {
//     const user_id = req.cookies.id; // or however you get the user ID from the request
//     try {
//         const existingBudget = await BudgetSchema.get({ user_id });
//         if (!existingBudget) {
//             const newBudget = new BudgetSchema({
//                 user_id,
//                 amount: 0
//             });
//             await newBudget.save();
//         }
//         next();
//     } catch (error) {
//         console.error('Error initializing budget:', error);
//         res.status(500).json({ message: 'Server error initializing budget' });
//     }
// };
//
// module.exports = initializeBudget;
