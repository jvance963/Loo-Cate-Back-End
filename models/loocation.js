const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const Loocation = new Schema({
  name: String,
  location: {
    lat: String,
    lng: String,
  },
  misc: String,
});

module.exports = Loocation;
