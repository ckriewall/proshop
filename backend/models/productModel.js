import mongoose from 'mongoose';

/*
    SCHEMAS
    Each schema maps to a MongoDB collection and defines
    the shape of the documents within that collection.

    Pass an object to the Schema method
    to define the data structure
*/

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestsamps: true }
);

const productSchema = mongoose.Schema(
  {
    /*
        Use 'ref' to create a relationship to
         data in another model
    */
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  /*
    The timestamps option tells mongoose to assign 
    createdAt and updatedAt fields to your schema.
    The type assigned is Date.
  */
  { timestamps: true }
);

// Create a model from the defined schema
const Product = mongoose.model('Product', productSchema);

// Export the model
export default Product;
