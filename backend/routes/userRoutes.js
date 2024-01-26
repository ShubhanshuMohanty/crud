const express=require('express');
const User2=require('../models/users.js');
const mongoose=require('mongoose');
const router=express.Router();

//create

router.post("/",async(req,res)=>{
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
router.get("/",async(req,res)=>{
    try {
        const showAll=await User2.find();
        res.status(201).json(showAll)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router