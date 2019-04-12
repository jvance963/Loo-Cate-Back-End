const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  body: String,
});

module.exports = Comment;
