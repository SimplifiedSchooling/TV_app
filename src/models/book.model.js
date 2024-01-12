const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    boardId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Board',
      required: true,
      trim: true,
    },
    mediumId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Medium',
      required: true,
      trim: true,
    },
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Classes',
      required: true,
      trim: true,
    },
    subjectId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Subject',
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
bookSchema.plugin(toJSON);
bookSchema.plugin(paginate);

const Book = mongoose.model('book', bookSchema);
module.exports = Book;
