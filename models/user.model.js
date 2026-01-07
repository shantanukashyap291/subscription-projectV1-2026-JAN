import mongoose from "mongoose";

import { Schema,model } from "mongoose";

const userSchema=new Schema({
 name:{type:String,
    require:[true,'name is an required field'],
    trim:true,
    minLength:2,
    maxLength:30
 },
 email:{type:String,
    require:[true,'email is a required field'],
    trim:true,
    unique:true,
    lowercase:true,
    minLength:10,
 },
 password:{
    type:String,
    require:[true,'user password is required'],
    minLength:6
 }

},{timestamps:true});


const userModal= model('User',userSchema);
export default userModal;