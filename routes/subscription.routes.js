import { Router } from "express";
import {createSubsription} from "../controllers/subscription.controller.js"
import { authmiddleware } from "../middleware/auth.middleware.js";

const subscriptionRouter=Router();

subscriptionRouter.get('/',(req,res)=>res.send({title:"get all subscription"}))
subscriptionRouter.get('/:id:',(req,res)=>res.send({title:"get subscription details"}))
subscriptionRouter.post('/',authmiddleware,createSubsription);


subscriptionRouter.put('/:id:',(req,res)=>res.send({title:"update subscription by id "}))
subscriptionRouter.delete('/:id:',(req,res)=>res.send({title:"delete subscription by id "}))
subscriptionRouter.get('/user/:id',(req,res)=>res.send({title:"get all subscription for specific user"}))
subscriptionRouter.put('/cancel/:id',(req,res)=>res.send({title:"cancel subscription for specific user"}))
subscriptionRouter.get('/upcoming-renewals/:id',(req,res)=>res.send({title:"get upcoming subscription for specific user"}))


export default subscriptionRouter;

//   "name":"ThePeacock",
//   "pric":"200",
//   "currencry":"INR",
//   "frequency":"monthly",
//   "category":"sports",
//   "paymentMethod":"online",
//   "startDate":"24-02-2021",