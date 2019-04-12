const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./comment');

const Bathroom = new Schema({
  Name: String,
  Street: String,
  City: String,
  State: String,
  ZipCode: String,
  location: {
    lat: String,
    lng: String,
  },
  Baby: Boolean,
  Handicap: Boolean,
  Unisex: Boolean,
  Male: Boolean,
  Female: Boolean,
  comment: [Comment],
});

module.exports = Bathroom;
