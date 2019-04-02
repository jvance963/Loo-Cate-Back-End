const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loocate');

mongoose.Promise = Promise;

module.exports = mongoose;
