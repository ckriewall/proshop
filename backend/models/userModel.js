import mongoose from 'mongoose';

/*
    SCHEMAS
    Each schema maps to a MongoDB collection and defines
    the shape of the documents within that collection.

    Pass an object to the Schema method
    to define the data structure
*/

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
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
const User = mongoose.model('User', userSchema);

// Export the model
export default User;
