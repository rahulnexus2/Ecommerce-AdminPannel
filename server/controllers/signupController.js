import express from "express"
import User from "../models/userModel.js"
import config from "../config/config.js"
import bcrypt from "bcryptjs"


const signupController=async(req,res,next)=>{
  try{

    const {username,role,email,password}=req.body;
    
    const hashPass=await bcrypt.hash(password,10);

    if(role=="admin")
    {
      const newAdmin=new User({
        username:username,
        email:email,
        password:hashPass,
        role:role
      })

      await newAdmin.save();
      res.status(201).json({
        message:"sucessfully signedup as admin",
        id:newAdmin._id,
        email:newAdmin.email
      })

    }
     else
    {
      const newUser=new User({
        username:username,
        email:email,
        password:hashPass,
        role:role
      })

      await newUser.save();
      res.status(201).json({
        message:"sucessfully signedup as user",
        id:newUser._id,
        email:newUser.email
      })

    }
    next();

  }catch(error)
  {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    })

  }

}


export default signupController;