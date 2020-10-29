import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

// load env configuration from /proshop/.env
dotenv.config();

connectDB();

//start express
const app = express();

// listen for connections on port 5000
app.listen(
  5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);

// a GET request to the root confirms the API is online
app.get('/', (req, res) => {
  res.send(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});

// use productRoutes.js to handle requests to /api/products
app.use('/api/products', productRoutes);
