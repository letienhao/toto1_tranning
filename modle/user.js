const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID : {
        type: String
    },
    firstName :{
        type : String,
        required :[true ,"firstName is not empty"],
        maxlength : [30,'firstName must be than 30 character'],
        minlength : [6, 'firstName must be less than 6 character'],
    },
    lastName : {
        type :String,
        maxlength: [8,"must be less than 8 characters"],
        minlength : [3,"must be than 3 characters"],
        require : true,
    },
})
const User = mongoose.model('userdb',userSchema)
module.exports = User  
