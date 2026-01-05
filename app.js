import express from 'express';
import {PORT,NODE_ENV} from './config/env.js'

import userRouter from "./routes/user.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import authRouter from "./routes/auth.routes.js"

const app=express();

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscriptions',subscriptionRouter);



app.listen(PORT,()=>{
    
    console.log(`running at http://localhost:${PORT}`);
})