/*
    Routes match URL patterns with JS functions to handle them.
    https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

    API data flow: routes -> controllers -> models -> database

    Route methods are derived from the HTTP methods
    .get() - a GET request to the target URL
    .post() - a POST request to the target URL
*/

import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import User from '../models/userModel.js';
import { authUser } from '../controllers/userController.js';

router.post('/login', authUser);

export default router;
