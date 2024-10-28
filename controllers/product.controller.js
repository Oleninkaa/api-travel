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
        const { country, place, price, date } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, { country, place, price, date }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.redirect('/trips'); // Повертаємось до списку після оновлення
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const editProductForm  = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.render('editProduct', { product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            res.status(404).json({message:"Product not found"})
        }

        
        res.redirect('/trips')

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    editProductForm
}