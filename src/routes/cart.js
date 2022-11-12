import { Router } from "express";
import { addProductCart,getCartByUser } from "../controllers/cartController.js";

const cartRouter = Router()

cartRouter.get('/cart/:id',getCartByUser)
cartRouter.post('/cart',addProductCart)

export {cartRouter}