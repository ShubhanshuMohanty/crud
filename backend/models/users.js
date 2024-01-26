const mongoose =require('mongoose');
const userSchema=new  mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true 
    },
    age:{
        type: Number,
    }
},{timestamps:true})

const User2=mongoose.model("User2",userSchema);

module.exports=User2