import { Router } from "express";
import { signIn, signOut, signup } from "../controllers/auth.controllers.js";

const authRouter=Router ();

authRouter.post("/signUp",signup)
authRouter.post("/signIN",signIn)
authRouter.post("/signOut",signOut)

export default authRouter