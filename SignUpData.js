const mongoose = require('mongoose')

const SignUp = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongoose.model('Users' , SignUp)