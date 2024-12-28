import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    username:String,
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },

    password:{
      type :String,
      required:[true,"Password is required"],

      unique:true
    },
    role:{
      type:String,
      default:"user"
    },





 },{timestamps:true});


export const User = mongoose.model("User", userSchema);

