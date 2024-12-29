import mongoose from 'mongoose';
const recordSchema=new mongoose.Schema({

},{timestamps:true});
export const records=mongoose.model('records',recordSchema);
