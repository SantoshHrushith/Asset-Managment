const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'client'],
        default: 'client'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
