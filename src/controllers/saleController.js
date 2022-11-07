import bcrypt from "bcryptjs";
import Sale from "../models/sale.js";

const createSale = async (req, res) => {
    try {
        const { id,
            date,
            client,
            product,
            value } = req.body

        const sale = await Sale.create({
            id: id,
            date: date,
            client: client,
            product: product,
            value: value
        })

        res.status(201).json(sale);
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const getAllSales = async (req, res) => {
    try {
        res.send(await Sale.findAll())
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

export { createSale, getAllSales }