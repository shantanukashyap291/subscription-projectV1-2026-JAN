import { Router } from "express";
import { getUsers,getUserById } from "../controllers/user.controller.js";
import { authmiddleware } from "../middleware/auth.middleware.js";

const userRouter=Router();

userRouter.get('/',authmiddleware,getUsers)
userRouter.get('/:id',getUserById)
userRouter.post('/:id',(req,res)=>res.send({title:"create specific user "}))
userRouter.put('/:id',(req,res)=>res.send({title:"update specific user by id "}))
userRouter.delete('/:id',(req,res)=>res.send({title:"delete specific user by id "}))


export default userRouter;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTYwNWNlY2E5M2NkMTZhYTk1NTFjODMiLCJpYXQiOjE3Njc5MjI5MjQsImV4cCI6MTc2ODAwOTMyNH0.gfYom-_UvFr3yupZWywSI3lri7eAL1tD5Ou2rIuRPX8
// 69605ceca93cd16aa9551c83