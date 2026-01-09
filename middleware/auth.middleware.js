import bcrypt  from "bcryptjs";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config/env.js";
import userModal from "../models/user.model.js";
export const authmiddleware=async(req,res,next)=>{
    try {
        let token;
        if(req.headers.authorization.startsWith('Bearer')){
             token=req.headers.authorization.split(" ")[1];
        }
        if(!token){
          res.status(401).json({
            success:false,
            msg:"unauthorized user"
          })
        }

        const matchToken=jwt.verify(token,JWT_SECRET);
        if(!matchToken){
            res.status(401).json({
                success:false,
                msg:"Token mismatch or token expired"
            })
        }
        const decodedUser= await userModal.findById(matchToken.userId).select('-password');     
        req.user=decodedUser;       
        next();
    } catch (error) {
        next(error)
    }
    
}