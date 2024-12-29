import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true

  },
  description:{
    type:String,
    required:true
  },
  productImage:{
    type:String,

  },
  price:{
    type:Number,
    required:true
  },
  stock:{
    type:Number,
    default:0
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category",
    required:true

  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true}

},{timestamps:true});

export const product=mongoose.model("product",productSchema);