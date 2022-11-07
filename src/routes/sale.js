import { Router } from "express";
import { createSale, getAllSales } from "../controllers/saleController.js";
//import { createUserRequest, getUserRequest } from "../http/request/index.js";

const saleRouter = Router()

saleRouter.post("/sale",createSaleRequest,createSale)
saleRouter.get("/sale",getSaleRequest,getAllSales)

export {saleRouter}