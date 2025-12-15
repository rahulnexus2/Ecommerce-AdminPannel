import mongoose from 'mongoose'

const UserModel=new mongoose.Schema({
  
  username:{
    
    type:String,
    required:true,
  },

  email:{
    type:String,
    unique:true,
    required:true,
    lowercase:true,
    trim:true
  },

  password:{
    type:String,
    required:true,
    select:false,
  },


  role:{
    type:String,
    enum:["user","admin"],
    default:"user",
    required:true,
  },

  

},
{
    timestamp:true
  }
)

const User=mongoose.model("user",UserModel);

export default User;