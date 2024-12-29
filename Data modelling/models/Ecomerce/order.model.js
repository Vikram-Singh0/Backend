import mongoose from 'mongoose';

const ordderItemSchema=new mongoose.Schema({
productId:{
  type:mongoose.Schema.Types.ObjectID,
  ref:"product",
  required:true

},
quantity:{
  type:Number,
  required:true

}});



const orderSchema=new mongoose.Schema({
orderPrice:{
  type:Number,
  required:true

},
customer:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"user",
},
oredrItems:{
  type:[ordderItemSchema],
  required:true

},
adress:{
  type:String,
  required:true
},status:{
  type:String,
 enum:["pending","completed","cancelled"],
 default:"pending"


}


},{timestamps:true});
export const order=mongoose.model('order',orderSchema);
