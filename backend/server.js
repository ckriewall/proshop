// ES module syntax replaces CommonJS syntax.
// Load modules
import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

// load env configuration from /proshop/.env
dotenv.config();

//start express
const app = express();

// listen for connections on port 5000
app.listen(
  5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);

// a GET request to the root confirms the API is online
app.get('/', (req, res) => {
  res.send(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});

// a GET request to return all products
// test at http://localhost:5000/api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// a GET request to return one product
// test at http://localhost:5000/api/products/1
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
