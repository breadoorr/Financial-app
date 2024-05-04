const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50,
    },
    password: {
        type: String,
        required: true,
        maxLength: 100,
        trim: true,
    },
    expenses: {
        type: String,
        required: true,
        // maxLength: 100,
    },
    incomes: {
        type: String,
        required: true,
        // maxLength: 100,
    },

}, )

module.exports = mongoose.model('User', UserSchema);
