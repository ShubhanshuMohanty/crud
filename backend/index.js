// console.log("hello");
const mongoose=require("mongoose");
const express=require("express");
const app=express();
const dotenv=require('dotenv');
//const User2=require('./models/users.js')
const userRoutes= require('./routes/userRoutes.js')
dotenv.config();
app.use(express.json());
//data ko json me convert karta haib  
const cors=require("cors")
app.use(cors())


mongoose.connect(process.env.URI).then(()=>{
    console.log("mongodb connected");
    app.listen(process.env.PORT || 8000)
}).catch(()=>{
    console.log("failed");
})

app.use(userRoutes);


/*
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

//read opretion
app.get("/",async(req,res)=>{
    try {
        const showAll=User2.find();
        res.status(201).json(showAll)
    } catch (error) {
        res.status(500).json(error)
    }
})
*/