const {db} = require('../database');
const { Schema } = require('mongoose')

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    author: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    publisher: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    subject: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
  }, {
    timestamps: true,
  }
)

const Books = db.mongoose.model(
  'Books',
  bookSchema,
  'books'  
);

module.exports = {Books}