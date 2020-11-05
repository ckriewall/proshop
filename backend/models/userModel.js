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

// before a user is saved check for a password change
userSchema.pre('save', async function (next) {
  // if the password hasn't changed move to the next step in the middleware chain
  if (!this.isModified('password')) {
    next();
  }

  // if the password has changed, hash it before saving
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Create a model from the defined schema
const User = mongoose.model('User', userSchema);

// Export the model
export default User;
