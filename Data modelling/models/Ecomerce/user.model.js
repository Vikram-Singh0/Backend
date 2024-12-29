import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
  userName:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  password:{
    type:String,
    unique:true,
    required:true,
  }

},{timestamps:true});

export const user=mongoose.model('user',userSchema);

