import mongoose from "mongoose";
import User from "../models/user.model.js";
export const getUsers=async(req,res,next)=>{
 try {
    const allUserData= await User.find().select("-password");
     return res.status(200).json({
        success:true,
        msg:"all user data fetched",
        data:{
           users:allUserData
        }
     })
 } catch (error) {
     next(error);
 }
} 
export const getUserById=async(req,res,next)=>{
    console.log("req.param--->",req.params);
    const id=req.params.id;
 try {
    const user= await User.findById(id);
    if(!user){
        return res.status(201).json({
            success:false,
            msg:"user not found "
        })
    }
     return res.status(200).json({
        success:true,
        msg:" user data fetched",
        data:{
           users:user
        }
     })
 } catch (error) {
     next(error);
 }
} 