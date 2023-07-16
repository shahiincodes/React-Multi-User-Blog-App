const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    photo:{
        type:String,
    },
    userId:{
        type:String,
    },
    category:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model('Post',postSchema)