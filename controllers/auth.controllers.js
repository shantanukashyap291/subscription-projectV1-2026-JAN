import mongoose from "mongoose"
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
export const signup=async(req,res,next)=>{
    const session=await mongoose.startSession();
    try {
// logic to create a new user
     session.startTransaction();
    const {name,email,password}=req.body;
    if(!name || !email|| !password)
    {

        console.log("req.body is compulsory");
        return  ;
    }
            
     const existingUser=await User.findOne({email});
     if(existingUser){
        const error=new Error('user already exists');
        error.statusCode=409
        throw error;
     }
    
    //   Hash password
    const salt=await bcrypt.genSalt(10);
    const hashedPwd= await bcrypt.hash(password,salt)
    const saveUsers=await User.create([{name,email,password:hashedPwd},{session}]);
    //  generate jwt
    const token=jwt.sign({userId:saveUsers[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
    
    await session.commitTransaction();
    session.endSession() 
    
    res.status(201).json({
        success:true,
        message:"userCreated",
        data:{
            token,
            user:saveUsers[0]
        }
     })

    } catch (Error) {
        await session.abortTransaction();
        await session.endSession(); 
         console.log("error------------>>",Error);
         
        next(Error)
    }
}
export const signIn=async(req,res,next)=>{

}
export const signOut=async(req,res,next)=>{

}