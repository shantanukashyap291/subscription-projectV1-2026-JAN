import { Router } from "express";

const subscriptionRouter=Router();

subscriptionRouter.get('/',(req,res)=>res.send({title:"get all subscription"}))
subscriptionRouter.get('/:id:',(req,res)=>res.send({title:"get subscription details"}))
subscriptionRouter.post('/:id:',(req,res)=>res.send({title:"create subscription "}))
subscriptionRouter.put('/:id:',(req,res)=>res.send({title:"update subscription by id "}))
subscriptionRouter.delete('/:id:',(req,res)=>res.send({title:"delete subscription by id "}))
subscriptionRouter.get('/user/:id',(req,res)=>res.send({title:"get all subscription for specific user"}))
subscriptionRouter.put('/cancel/:id',(req,res)=>res.send({title:"cancel subscription for specific user"}))
subscriptionRouter.get('/upcoming-renewals/:id',(req,res)=>res.send({title:"get upcoming subscription for specific user"}))


export default subscriptionRouter;