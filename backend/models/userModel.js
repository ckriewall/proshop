import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
/*
    SCHEMAS
    Each schema maps to a MongoDB collection and defines
    the shape of the documents within that collection.

    Pass an object to the Schema method to define the data structure.abs

    Schema methods (like matchPassword) are instance methods to documents
    constructed from Models compiled from this schema
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

// match.password is called ON a specific user, the user becomes 'this'
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create a model from the defined schema
const User = mongoose.model('User', userSchema);

// Export the model
export default User;
