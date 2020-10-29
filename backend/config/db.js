import mongoose from 'mongoose';

const connectDB = async () => {
  // mongoose returns promises, so we use async/await
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // mongooose required parameters
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
