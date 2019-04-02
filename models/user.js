const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  loocation: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Loocation',
    },
  ],
  humor: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Humor',
    },
  ],
});
