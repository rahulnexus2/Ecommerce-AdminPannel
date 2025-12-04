import mongoose from 'mongoose'

const UserModel=new mongoose.Schema({
  
  username:{
    
    type:String,
    required:true,
  },

  email:{
    type:String,
    unique:true,
    required:true
  },

  password:String,

  role:{
    type:String,
    enum:["user","admin"],
    default:"user",
    required:true,
  },

  createdAt:{
    type:Date,
    default:Date.now

  }

})

const user=mongoose.model("user",UserModel);

export default user;