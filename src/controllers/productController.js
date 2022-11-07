import bcrypt from "bcryptjs";
import Product from "../models/product.js";

const createProduct = async (req, res) => {
    try {
        const { id,
            name,
            units,
            price } = req.body

        const product = await Product.create({
            id: id,
            name: name,
            units: units,
            price: price
        })

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const getAllProducts = async (req, res) => {
    try {
        res.send(await Product.findAll())
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

export { createProduct, getAllProducts }