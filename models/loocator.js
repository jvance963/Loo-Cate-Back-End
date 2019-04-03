var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const LoocatorSchema = new Schema({
  Street: String,
  City: String,
  State: String,
});

module.exports = LoocatorSchema;
