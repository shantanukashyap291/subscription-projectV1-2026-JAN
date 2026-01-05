import { Router } from "express";

const userRouter=Router();

userRouter.get('/',(req,res)=>res.send({title:"get all users"}))
userRouter.get('/:id:',(req,res)=>res.send({title:"get specific user detail"}))
userRouter.post('/:id:',(req,res)=>res.send({title:"create specific user "}))
userRouter.put('/:id:',(req,res)=>res.send({title:"update specific user by id "}))
userRouter.delete('/:id:',(req,res)=>res.send({title:"delete specific user by id "}))


export default userRouter;