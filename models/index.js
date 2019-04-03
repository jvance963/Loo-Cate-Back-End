const mongoose = require('../db/connection');

module.exports = {
  User: mongoose.model('User', require('./user')),
  Loocation: mongoose.model('Loocation', require('./loocation')),
  Loocator: mongoose.model('Loocator', require('./loocator')),
  Post: mongoose.model('Post', require('./post')),
  Comment: mongoose.model('Comment', require('./comment')),
};
