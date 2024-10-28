const express = require('express')
const router = express.Router();
const Product  = require('../models/product.model');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller');


router.get('/', getProducts);

router.get('/add', (req, res) => {
    res.render('addProduct'); // Відображає шаблон форми додавання
});

router.post('/add', createProduct);




router.get('/:id', getProduct);



router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router