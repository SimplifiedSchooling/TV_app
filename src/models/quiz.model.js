const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const quizeSchema = mongoose.Schema(
  {
    quizName: {
      type: String,
      index: true,
    },
    files: {
      type: String,
    },
    options: {
      type: [String],
      required: true,
    },
    correctOptions: {
      type: [Number], // An array of indices (0 to 3) of correct options
      required: true,
    },
    explain: {
      type: String,
    },
    hint: {
      type: String,
    },
    types: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    marks: {
      type: Number,
    },
    boardId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'board',
      required: true,
    },
    mediumId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'medium',
      required: true,
    },
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'class',
      required: true,
    },
    bookId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'book',
      required: true,
    },
    subjectId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'subject',
      required: true,
    },
    chapterId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'chapter',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
quizeSchema.plugin(toJSON);
quizeSchema.plugin(paginate);

const Quize = mongoose.model('quize', quizeSchema);

module.exports = Quize;
