import { Router } from "express";
import { createProduct,getAllProducts } from "../controllers/productController.js";

const productRouter = Router()

productRouter.post('/product',createProduct)
productRouter.get('/product', getAllProducts)

export {productRouter}