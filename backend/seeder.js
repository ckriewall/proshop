import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

/*
  This file is separate from our Express server
  As such, we need to start a separate DB connection
*/
dotenv.config();
connectDB();

/* 
  Both functions below use process.exit. 
  The process object is a global that provides 
  information about, and control over, the 
  current Node.js process. As a global, it 
  is always available to Node.js applications 
  without using require()
*/
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    /* 
      Insert users and store results in a variable
      The first user in our seeder data is the admin.
      We get the admin ObjectId from the first object
      in the returned array.
    */
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    /*
      Insert products
    */
    await Product.insertMany(sampleProducts);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

/* 
  We can run node commands to call these functions:
  node backend/seeder    => to import data
  node backend/seeder -d => to destroy data
  In package.json, add scripts to call these functions
*/
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
