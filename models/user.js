const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = User;
