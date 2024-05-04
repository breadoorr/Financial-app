const UserSchema = require("../models/UserModel")

exports.addUser = async (req, res) =>  {
    const {username, email, password, expenses, incomes} = req.body;

    const user = UserSchema({
        username,
        email,
        password,
        expenses,
        incomes,
    })

    try {
        await user.save();
        res.status(200).json({message: "User added"});
    } catch(error) {
        res.status(500).json({message: "server error"});
    }

    console.log(user);
}

exports.getUser = async (req, res) => {
    const {id} = req.params;
    UserSchema.findById(id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(500).json({message: "Server error"});
        })
}

exports.updateUserExpense = async (req, res) => {
    const {id} = req.params;
    UserSchema.findById(id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(500).json({message: "Server error"});
        })
}

exports.updateUserIncome = async (req, res) => {
    const {id} = req.params;
    UserSchema.findById(id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(500).json({message: "Server error"});
        })
}

exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    UserSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: "User deleted", user});
        })
        .catch((err) => {
            res.status(500).json({message: "Server error"});
        })
}