import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

/*
 Serving data with Express requires us to:
  1. Load our environment variables from .env 
  2. Open a MongoDB connection
  3. Start Express
  4. Listen for connections on port 5000
  5. Handle valid routes
  6. Handle errors
*/

dotenv.config();
connectDB();
const app = express();
app.listen(
  5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);

/*
  Express handles routes sequentially. We're going to:
    1. return a "server running" status message at /
    2. pass requests to /products to the productRoutes handler
    3. pass 404 errors to the middleware notFound function
    4. pass other errors to the middleware errorHandler function
*/

app.get('/', (req, res) => {
  res.send(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);
