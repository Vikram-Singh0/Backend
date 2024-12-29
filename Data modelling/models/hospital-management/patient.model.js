import mongoose from 'mongoose';
const patientSchema=new mongoose.Schema({
name:{
  type:String,
  required:true,
},
age:{
  type:Number,
  required:true
},
diagnosedWith:{
  type:String,
  required:true
},
adress:{
  type:String,
  required:true
},
blodGroup:{ 
  type:String,
  required:true
},
gender:{
  type:String,
  enum:["M","F","O"],
  required:true
},
admittedIn:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"hospital",
}


},{timestamps:true});
export const patient =mongoose.model('patient',patientSchema);