import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/productController.js";
//import { createProductRequest, getProductRequest } from "../http/request/index.js";

const productRouter = Router()

productRouter.post("/product",createproductRequest,createProduct)
productRouter.get("/product",getProductRequest,getAllProducts)

export {productRouter}