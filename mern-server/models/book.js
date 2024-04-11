const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    book_name:{
        type:String,
        required:true,
    },
    book_author:{
        type:String,
        required:true,
    },
    book_price:{
        type:Number,
        required:true,
    },
    book_publish_date:{
        type:Date,
        required:true,
    },
    Status:{
        type:String,
        enum:['enable','disable'],
        default:'enable'
    }
})

module.exports = mongoose.model('bs_books',bookSchema)