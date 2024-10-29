const express = require('express')
const router = express.Router();
const Product  = require('../models/product.model');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct, editProductForm} = require('../controllers/product.controller');


router.get('/', getProducts);
router.get('/add', (req, res) => {
    res.render('addProduct');
});
router.post('/add', createProduct);
router.delete('/delete/:id', deleteProduct);
router.post('/edit/:id', updateProduct);
router.get('/edit/:id', editProductForm);
router.delete('/delete/:id', deleteProduct);


module.exports = router