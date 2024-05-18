const IncomeSchema = require("../models/IncomeModel")

exports.addIncome = async (req, res) =>  {
    const {title, amount, category, description, date} = req.body;
    const user_id = req.cookies.id;
    // console.log(user_id);
    // console.log(id);
    const income = IncomeSchema({
        user_id,
        title,
        amount,
        category,
        description,
        date
    })
    //
    try {
        await income.save();
        res.status(200).json({message: "Income added"});
        // res.redirect('/');
    } catch(error) {
        res.status(500).json({message: "server error"});
    }
}

exports.getIncomes = async (req, res) => {
    // console.log(req.cookies.id);
    const id = req.cookies.id;
    try {
        const incomes = await IncomeSchema.get(id);
        // console.log(incomes, "get");
        res.status(200).json(incomes);

    } catch (error) {
        res.status(500).json(error);

    }
}
