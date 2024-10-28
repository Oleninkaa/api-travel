const Product  = require('../models/product.model')


const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('trips', { products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const createProduct = async (req, res) => {
    try {
        const {country, place, price, date } = req.body;
        const newProduct = new Product({ country, place, price, date });
        await newProduct.save(); // Зберігаємо новий об’єкт у базі даних
        res.redirect('/trips'); // Переходимо на сторінку зі списком продуктів
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)

        if(!product){
            res.status(404).json({message:"Prosuct not found"})
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            res.status(404).json({message:"Product not found"})
        }

        
        res.status(200).json("Deleted successfully")

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}