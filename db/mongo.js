import mongoose, { Mongoose } from "mongoose";
import {NODE_ENV,DB_URL} from '../config/env.js'



export  const connectToDatabase=async()=>{
    try {
       await mongoose.connect(DB_URL);
        console.log("database connnection successful");
        
    } catch (error) {
         console.log("failed to connect to database",error);
    }
}