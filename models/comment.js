const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  body: String,
  name: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = Comment;
