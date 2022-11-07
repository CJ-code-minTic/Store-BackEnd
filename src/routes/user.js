import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";
//import { createUserRequest, getUserRequest } from "../http/request/index.js";

const userRouter = Router()

userRouter.post("/user",createUserRequest,createUser)
userRouter.get("/user",getUserRequest,getAllUsers)

export {userRouter}