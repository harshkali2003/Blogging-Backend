const mongoose = require('mongoose')

let Feedback = new mongoose.Schema({
    name : String,
    email : String,
    comments : String
})

module.exports = mongoose.model('Feedback', Feedback)