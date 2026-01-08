import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
import user from "../models/user.model.js";
export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPwd,
    });

    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return res.status(201).json({
      success: true,
      message: "User created",
      data: {
        token,
        user,
      },
    });

  } catch (error) {
    console.error("Signup error:", error);
    next(error);
  }
};

export const signIn=async(req,res,next)=>{
    try {
    const {email,password}=req.body;
    if(!email || !password) return res.status(201).send({success:false,msg:"provide email or password"})
    const userExist= await user.findOne({email});
    if(!userExist) 
    {
    return res.status(404).send({success:false,msg:"User does not exist"})
    }

    const matchUser=await bcrypt.compare(password,userExist.password);
    if(matchUser){
        const token=jwt.sign({userId:userExist._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})
        return res.status(200).json({
            success:true,
            msg:"sign in success",
            data:{token},
            
        })
    }
    else{
        return res.status(404).send({success:false,msg:"mismatch username or password"})
    }
}
 catch (error) {
        next(error)
    }
}
export const signOut=async(req,res,next)=>{

}