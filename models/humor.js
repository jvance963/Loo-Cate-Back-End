var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  const CommentSchema = new Schema(
    {
      content: String,
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },

    {
      timestamps: true,
    }
  ),

var HumorSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    default: 0,
  },
  comments: [CommentSchema],
});

module.exports = HumorSchema
