const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
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

IncomeSchema.statics.get = async function( id ) {
    const income = this.findOne({ user_id: id });
    if(income) {
        return income;
    }
    else {
        throw Error("No incomes");
    }
}

const Income = mongoose.model('Income', IncomeSchema);
module.exports = Income;
