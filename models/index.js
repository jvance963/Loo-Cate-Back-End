const mongoose = require('../db/connection');

module.exports = {
  User: mongoose.model('User', require('./user')),
  loocation: mongoose.model('Loocation', require('./loocation')),
  Loocator: mongoose.model('Loocator', require('./loocator')),
  Humor: mongoose.model('Humor', require('./humor')),
};
