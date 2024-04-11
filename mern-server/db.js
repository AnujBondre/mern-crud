const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Anuj:3162@crud.mh2fqe4.mongodb.net/bookstore')

mongoose.connection.on('connected',() => {
    console.log("connected to mongoDB");
})

mongoose.connection.on('error',(err) => {
    console.error("connection error:",err);
})

module.exports = mongoose