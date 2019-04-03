var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: String,
    author: { type: Schema.Types.ObjectId, ref: 'User', },
},
    {
        timestamps: true,
    }
),

const LoocationSchema = new Schema(
  {
    name: String,
    loc: { type: 'LineString', coordinates: [longitude, latitude] },
    toilets: Number,
    meta: {
      up_votes: Number,
      default: 0,
    },
    down_votes: Number,
    default: 0,
  },
  {
    comments: [CommentSchema],
  }
);

//   {
//     name: String,
//     loc: { type: 'LineString', coordinates: [longitude, latitude] },
//     meta: {
//       up_votes: Number,
//       default: 0,
//     },
//     down_votes: Number,
//     default: 0,
//   },
//   {
//     comments: [CommentSchema],
//   }
// );

module.exports = LoocationSchema;
