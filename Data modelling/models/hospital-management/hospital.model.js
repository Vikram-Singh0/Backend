import mongoose from 'mongoose';
const hospitalSchema=new mongoose.Schema({
name:{
  type:String,
  required:true,
},
adress:{
  type:String,
  required:true,      

},
contact:{
  type:Number,
  required:true,},

  pinCode:{
    type:String,
    required:true,
  }

},{timestamps:true});
export const hospital=mongoose.Schema.model('hospital',hospitalSchema);