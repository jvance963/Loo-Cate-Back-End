const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Loocator = new Schema({
  Street: String,
  City: String,
  State: String,
});

module.exports = Loocator;
