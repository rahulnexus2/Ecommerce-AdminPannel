import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

import config from "../config/config.js"


const loginController=async(req,res,next)=>{

  try{

    const token=jwt.sign({
      
        id:User.id,
        email:User.email,

      },
      config.jwt_secret,
      {expiresIn:"7d"}

    )


    res.json({
      message:"login sucessfull",
      token,
      user:{
        id: User._id,
        name: User.name,
        email: User.email,
      }
    })

  }catch(error)
  {

    console.log(error);
    res.status(500).json({ error: "Server error" });


  }

  next();
}


export default loginController