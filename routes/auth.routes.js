import { Router } from "express";

const authRouter=Router();

authRouter.post("/singUp",(req,res)=>{
    res.send({title:"signup succesfully"})
})
authRouter.post("/signIN",(req,res)=>{
    res.send({title:"signIN succesfully"})
})
authRouter.post("/signOut",(req,res)=>{
    res.send({title:"signOut succesfully"})
})

export default authRouter