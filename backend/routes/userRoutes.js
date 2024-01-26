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

//update
router.patch("/:id",async (req,res)=>{
    const {id}=req.params;
    const {name,email,age}=req.body
    try {
        const updateUser=await User2.findByIdAndUpdate(id,req.body,{new :true});
        res.status(201).json(updateUser);        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

//single user
router.get("/:id",async (req,res)=>{
    const {id}=req.params;
    
    try {
        const singleUser=await User2.findById({_id:id});
        res.status(201).json(singleUser);        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

//delete user
router.delete("/:id",async (req,res)=>{
    const {id}=req.params;
    
    try {
        const deleteUser=await User2.findByIdAndDelete({_id:id});
        res.status(201).json(deleteUser);        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


module.exports=router