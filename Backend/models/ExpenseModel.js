const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    user_id: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50,
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 100,
        trim: true,
    },

}, {timestamps: true})

ExpenseSchema.statics.get = async function( id ) {
    const expense = this.find({ user_id: id });
    if(expense) {
        return expense;
    }
    else {
        throw Error("No expenses");
    }
}

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = mongoose.model('Expense', ExpenseSchema);
