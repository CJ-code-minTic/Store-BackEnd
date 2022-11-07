import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    user:{ type: Schema.Types.ObjectId, ref: "User", required: true },
    products:[{ type: Schema.Types.ObjectId, ref: "Product", required: true }]    
})

export default model("Cart",cartSchema)