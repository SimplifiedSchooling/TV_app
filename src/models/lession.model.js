const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const lessionSchema = mongoose.Schema(
  {
    boardId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Board',
      required: true,
    },
    mediumId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Medium',
      required: true,
    },
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Classes',
      required: true,
    },
    subjectId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Subject',
      required: true,
    },
    bookId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'book',
      required: true,
    },
    chapterId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Chapter',
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      required: true,
    },
    order: {
      type: Number,
      trim: true,
      required: true,
    },
    thumbnail: {
      type: String,
      trim: true,
    },
    poster: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
lessionSchema.plugin(toJSON);
lessionSchema.plugin(paginate);

const lession = mongoose.model('lession', lessionSchema);

module.exports = lession;
