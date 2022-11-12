import { Router } from "express";
import { createSale, getAllSales } from "../controllers/saleController.js";
//import { createUserRequest, getUserRequest } from "../http/request/index.js";

const saleRouter = Router()

saleRouter.post("/sale",createSale)
saleRouter.get("/sale",getAllSales)

export {saleRouter}