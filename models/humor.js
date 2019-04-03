var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  const CommentSchema = new Schema({
      body: String,
      author: {type: Schema.Types.ObjectId,ref: 'User',},
    },
    {
      timestamps: true,
    }
  ),

var StorySchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'User',},
  body: String,
  timestamps: true,
  hidden: Boolean,
  meta: {
    votes: Number,
    default: 0,
  },
  comments: [CommentSchema],
});

module.exports = StorySchema
