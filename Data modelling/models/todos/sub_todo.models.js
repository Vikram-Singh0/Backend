import mongoose from "mongoose";

const subSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  cpmplete:{
    type:Boolean,
    default:false,

  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }

},{timestamps:true});

export const sub=mongoose.model("sub",subSchema)