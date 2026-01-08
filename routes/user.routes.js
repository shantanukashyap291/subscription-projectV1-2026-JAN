import { Router } from "express";
import { getUsers,getUserById } from "../controllers/user.controller.js";

const userRouter=Router();

userRouter.get('/',getUsers)
userRouter.get('/:id',getUserById)
userRouter.post('/:id',(req,res)=>res.send({title:"create specific user "}))
userRouter.put('/:id',(req,res)=>res.send({title:"update specific user by id "}))
userRouter.delete('/:id',(req,res)=>res.send({title:"delete specific user by id "}))


export default userRouter;