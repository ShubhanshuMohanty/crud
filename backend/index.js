// console.log("hello");
const mongoose=require("mongoose");
const express=require("express");
const app=express();
const dotenv=require('dotenv');
const User2=require('./models/users.js')
dotenv.config();
app.use(express.json());
//data ko json me convert karta haib  



mongoose.connect(process.env.URI).then(()=>{
    console.log("mongodb connected");
    app.listen(process.env.PORT || 8000)
}).catch(()=>{
    console.log("failed");
})

app.post("/",async(req,res)=>{
    const {name,age,email}=req.body;
    try {
        const userAdded=await User2.create({
            name,
            age,
            email
        })
        res.status(201).json(userAdded)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

// app.get("/",(req,res)=>{
//     res.send("app is running");
// })

