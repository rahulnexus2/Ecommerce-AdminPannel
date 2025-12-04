import express from "express";
import user from "../models/userModel.js";

const signupAuth=async(req,res,next)=>{
  try{
  const {email}=req.body;

  const existingUser=await user.findOne({email});

  if(existingUser)
  {
    return res.status(400).json({message:"email is already registered"});

  }
  next()
}
catch(error)
{

  res.status(500).json({message:"server error..",
    error:error.message
  })

}

}



export default signupAuth
