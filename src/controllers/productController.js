import Product from '../models/Product.js';

const createProduct = async (req,res) =>{
    try {
        let stock = false
        const {
            image,
            name,
            description,
            price,
            amount
        } = req.body

        if(amount > 0){
            stock = true
        }

        const data = {
            image:image,
            name:name,
            description:description,
            price:price,
            amount:amount,
            stock:stock
        }
        
        const product = Product(data)
        const productSave = await product.save()
        
        res.status(201).json(productSave)


    } catch (error) {
        res.status(500).json({message: "Error Interno del Servidor",detail: error})
    }
}

const getAllProducts = async(req,res)=>{
    try {
        res.status(200).json(await Product.find())
    } catch (error) {
        res.status(500).json({message: "Error Interno del Servidor",detail: error})
    }
}

export {createProduct, getAllProducts}
