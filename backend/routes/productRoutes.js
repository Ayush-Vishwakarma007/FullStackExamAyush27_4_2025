const express = require('express');
const { createProduct, getAllProducts } = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createProduct);

router.get('/', getAllProducts);

module.exports = router;
