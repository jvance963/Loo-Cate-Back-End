const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const Loocation = new Schema({
  name: String,
  location: String,
  // loc: { type: 'LineString', coordinates: [longitude, latitude] },
  bathrooms: Boolean,
  misc: String,
  up_vote: {
    type: Number,
    default: 0,
  },
  author: [User],
});

module.exports = Loocation;
