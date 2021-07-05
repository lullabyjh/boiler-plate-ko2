const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50
    },
    eail:{
        type:String,
        trim:true,  
        unique:1  
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlegnth:50
    },
    role:{
        type:Number,
        defulat:1
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = {User}