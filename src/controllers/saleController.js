import Sale from "../models/sales.js";

const createSale = async (req, res) => {
    try {        

        const {
            user,
            products
        } = req.body

        let productsArray = []

        let totalSale

        products.forEach(product => {
            const totalProduct = product.amount * product.price
            const data = {
                productId:product.productId,
                amount:amount,
                price:price,
                total:totalProduct
            }
            productsArray.push(data)
            totalSale += totalProduct
        });

        const saleData = {
            user:user,
            products:products,
            total:totalSale
        }

        const sale = Sale(saleData)
        const saleSave = await sale.save()

        res.status(201).json(saleSave)
        
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const getAllSales = async (req, res) => {
    try {
        res.send(await Sale.find())
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

export { createSale, getAllSales }