import { Router } from "express";
import { createUser } from "../controllers/userController.js";

const userRouter = Router()

userRouter.post('/user',createUser)

export {userRouter}