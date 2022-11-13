import { Router } from "express";
import { createProduct,deleteProduct,getAllProducts,getProductById,updateProduct } from "../controllers/productController.js";

const productRouter = Router()

productRouter.post('/product',createProduct)
productRouter.get('/product', getAllProducts)
productRouter.get('/product/:id', getProductById)
productRouter.put('/product/:id',updateProduct)
productRouter.delete('/product/:id',deleteProduct)

export {productRouter}