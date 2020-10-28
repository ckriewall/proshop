// Modules are loaded with CommonJS rather than ES modules import.
// CommonJS is a module formatting system. It is a standard for
// structuring and organizing JavaScript code.
// We'll move to ES modules later

// load modules
const express = require('express');
const products = require('./data/products');

//start express
const app = express();

// listen for connections on port 5000
app.listen(5000, console.log('Server running on port 5000'));

// a GET request to the root confirms the API is online
app.get('/', (req, res) => {
  res.send('API is running...');
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
