const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }

})
module.exports = mongoose.model("login",loginSchema)