const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    confirm_password:{
        type:String,
        require:true
    }

})
module.exports = mongoose.model("signup",signupSchema)