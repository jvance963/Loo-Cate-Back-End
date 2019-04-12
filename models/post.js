const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./comment');

const post = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  body: String,
  hidden: Boolean,
  meta: { votes: Number, default: 0 },
  comment: [Comment],
});

module.exports = post;
