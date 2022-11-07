import { Schema, model } from "mongoose";

const saleSchema = new Schema({
    date: { type: Date, default: Date.now },
    total: { type: Number, required: true },
    user: {
        type: Schema.Types.ObjectId, ref: "User", required: true
    },
    products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }]
},{
    timestamps: true,
    versionKey:false
})


export default model("Sale",saleSchema)