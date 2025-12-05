import user from "../models/userModel"
import jwt from "jsonwebtoken"
import loginAuth from "../Auth/loginAuth"
import config from "../config/config"


const loginController=async(req,res,next)=>{

  try{

    const token=jwt.sign({
      
        id:user.id,
        email:user.email,

      },
      config.jwt_secret,
      {expiresIn:"7d"}

    )


    res.json({
      message:"login sucessfull",
      token,
      user:{
        id: user._id,
        name: user.name,
        email: user.email,
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