const mongoose = require('mongoose')

const CreatePost = mongoose.Schema({
    title:String,
    description : String
})

module.exports = mongoose.model('CreatePost' , CreatePost)