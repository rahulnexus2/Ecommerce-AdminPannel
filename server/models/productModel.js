import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
   },
  description:{
    type:String,
    required:true
   },
   image:String,

   price:{
    type:Number,
    required:true
   },

   stock:{
    type:Number,
    default:0
   },

   id:{
    type:String,
    required:true
   }

},{
    timestamps:true
  }
  )

const productModel=mongoose.model("productModel",productSchema)

export default productModel;