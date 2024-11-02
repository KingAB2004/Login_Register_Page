const mongoose =require('mongoose')
const RegisterDetails =new mongoose.Schema({
    username: {
        type:String,
        required: [true ,'must provide name'],
        trim :true
    },
    email:{
        type:String,
        required: [true ,'must provide name'],
        trim :true  
    },
    password :{
        type:String,
        required: [true ,'must Provide a good Password'],
        trim:true

    },
})
module.exports =mongoose.model('Register_Details' ,RegisterDetails)