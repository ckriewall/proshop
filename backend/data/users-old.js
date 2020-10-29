import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Maia K',
    email: 'maia@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nick K',
    email: 'nick@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
