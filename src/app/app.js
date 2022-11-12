import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { userRouter } from "../routes/user.js";
import { productRouter } from "../routes/product.js";
import { saleRouter } from "../routes/sale.js";
import { cartRouter } from "../routes/cart.js";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

app.use(userRouter)
app.use(productRouter)
app.use(saleRouter)
app.use(cartRouter)

export default app;