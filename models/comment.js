const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  body: String,
  name: String,
});

module.exports = Comment;
