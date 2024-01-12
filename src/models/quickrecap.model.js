const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const quickRecapSchema = mongoose.Schema(
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
    description: {
      type: String,
      required: true,
    },
    chapterName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
quickRecapSchema.plugin(toJSON);
quickRecapSchema.plugin(paginate);

const Quickrecap = mongoose.model('Quickrecap', quickRecapSchema);

module.exports = Quickrecap;
