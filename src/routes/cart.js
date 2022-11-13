import { Router } from "express";
import { addProductCart,deleteCart,deleteProductCart,getCartByUser } from "../controllers/cartController.js";

const cartRouter = Router()

cartRouter.get('/cart/:id',getCartByUser)
cartRouter.post('/cart',addProductCart)
cartRouter.delete('/cart/:id',deleteCart)
cartRouter.delete('/cart',deleteProductCart)

export {cartRouter}