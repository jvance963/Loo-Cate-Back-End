const mongoose = require('../db/connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);
User.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

User.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports = User;
