import bcrypt from "bcryptjs";
import User from "../models/userModel.js";


const loginAuth=async(req,res,next)=>{
  try{

    const {email,password}=req.body;

    const user=await User.findOne({email})
    if(!user)
      {
        return res.status(400).json({ error: "Invalid email or password"});
      }

    const isMatch= await bcrypt.compare(password,user.password)
    if(!isMatch)
      {
        return res.status(400).json({ error: "Invalid email or password"});
      }

      next()

  }catch(error)
  {
    console.log(error);
    res.status(500).json({ error: "Server error" });

  }

}

export default loginAuth