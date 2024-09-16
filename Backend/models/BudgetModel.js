const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    user_id: {
        type: String,
        require: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true,
    }
    // currency: {
    //     type: String,
    //     enum: [USD'],
    //     required: true,
    // },
    // date: {
    //     type: Date,
    //     required: true,
    //     trim: true,
    // }

}, {timestamps: true})

BudgetSchema.statics.get = async function( id ) {
    const budget = this.findOne({ user_id: id });
    if(budget) {
        return budget;
    }
    else {
        this.create({ user_id: id, amount: 0 })
    }
}

BudgetSchema.statics.updateByUserId = async function (user_id, amount) {
    return this.findOneAndUpdate(
        { user_id },
        { amount },
        { new: true, upsert: true }
    );
}

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = mongoose.model('Budget', BudgetSchema);
