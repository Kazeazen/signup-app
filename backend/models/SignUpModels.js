const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateMade: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Sign-Ups', signUpTemplate)