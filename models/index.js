const mongoose = require('../db/connection');

module.exports = {
  User: mongoose.model('User', require('./user')),
  Loocation: mongoose.model('Loocation', require('./loocation')),
  Bathroom: mongoose.model('Bathroom', require('./bathroom')),
  Post: mongoose.model('Post', require('./post')),
  Comment: mongoose.model('Comment', require('./comment')),
};
