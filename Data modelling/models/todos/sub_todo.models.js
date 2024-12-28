import mongoose from "mongoose";

const subSchema=new mongoose.Schema({

},{timestamps:true});

export const sub=mongoose.model("sub",subSchema)