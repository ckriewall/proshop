/*
    Routes match URL patterns with JS functions to handle them.
    https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

    API data flow: routes -> controllers -> models -> database
*/

import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
