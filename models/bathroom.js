const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bathroom = new Schema({
  Name: String,
  Street: String,
  City: String,
  State: String,
  ZipCode: String,
  Location: Loocation,
  Baby: Boolean,
  Handicap: Boolean,
  Unisex: Boolean,
  Male: Boolean,
  Female: Boolean,
  Comments: [Comment],
});

module.exports = Bathroom;
