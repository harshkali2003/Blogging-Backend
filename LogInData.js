const mongoose = require('mongoose')

const LogIn =new mongoose.Schema({
    email:String,
    password:String
})

module.exports = mongoose.model('users' , LogIn)