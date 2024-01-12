const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ebookSchema = mongoose.Schema(
  {
    chapterId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Chapter',
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    chapterName: {
      type: String,
      required: true,
    },
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
      ref: 'Book',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ebookSchema.plugin(toJSON);
ebookSchema.plugin(paginate);

const Ebook = mongoose.model('Ebook', ebookSchema);

module.exports = Ebook;
