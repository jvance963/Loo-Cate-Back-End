const mongoose = require('../db/connection');

module.exports = {
  User: mongoose.model('User', require('./user')),
};
