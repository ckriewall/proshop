/*
    Controller functions get requested data from a model.
    https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

    API data flow: routes -> controllers -> models -> database
*/

import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Auth user & return token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

export { authUser };