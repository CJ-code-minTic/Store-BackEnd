import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const addProductCart = async (req, res) => {
    try {
        const { user, product } = req.body

        const cart = await Cart.findOne({ user: user })

        let data

        const productDB = await Product.findById(product.productId)
        let stock = false
        const newAmount = productDB.amount - product.amount        
        if (newAmount < 0) return res.status(400).json({ message: "Cantidad no Valida" })
        if (newAmount > 0) stock = true
        productDB.amount = newAmount
        productDB.stock = stock
        await productDB.save()

        if (cart === null) {

            data = {
                user: user,
                products: [
                    {
                        productId: product.productId,
                        amount: product.amount,
                        price: product.price,
                        total: product.amount * product.price
                    }
                ],
                total: product.amount * product.price
            }            
            const cartCreate = await Cart(data).save()
            res.status(200).json(cartCreate)
        } else {
            let newProduct = true            
            let totalCart = 0
            cart.products.forEach(p => {
                if(p.productId.equals(product.productId)){
                    newProduct = false
                    p.amount += product.amount
                    p.total = p.amount * p.price                                        
                }                
            });                        
            if(newProduct){
                const data = {
                    productId: product.productId,
                    amount: product.amount,
                    price: product.price,
                    total: product.amount * product.price
                }
                cart.products.push(data)                
            }
            cart.products.forEach(p=>{                
                totalCart += p.total                
            })
            cart.total = totalCart
            await Cart.findByIdAndUpdate(cart.id, cart)
            res.status(200).json(await Cart.find())
        }

    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const getCartByUser = async (req, res) => {
    try {

        const id = req.params.id

        const cart = await Cart.findOne({ user: id })

        if (cart === null) {
            res.status(404).json({ message: "Usuario sin Carrito de Compras" })
        }
        else {
            res.status(200).json(cart)
        }


    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

export { addProductCart, getCartByUser }