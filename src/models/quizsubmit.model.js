const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const quizSubmissionSchema = mongoose.Schema(
  {
    studentId: {
      type: Number,
      required: true,
    },
    scode: {
      type: String,
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
    answers: [
      {
        questionId: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: 'quize', // Reference to the quiz question
          required: true,
        },
        selectedOptions: [Number], // An array of indices (0 to 3) of selected options
      },
    ],
    score: {
      type: Number,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Add plugins for toJSON and pagination if needed
quizSubmissionSchema.plugin(toJSON);
quizSubmissionSchema.plugin(paginate);

const QuizSubmit = mongoose.model('QuizSubmit', quizSubmissionSchema);

module.exports = QuizSubmit;

// const mongoose = require('mongoose');
// const { toJSON, paginate } = require('./plugins');

// const quizSubmitSchema = mongoose.Schema(
//   {
//     userId: {
//       type: Number,
//       required: true,
//     },
//     questionId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'quize',
//       required: true,
//     },
//     subjectId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'subject',
//       required: true,
//     },
//     selectedOptions: [Number],
//   },
//   { timestamps: true }
// );

// // add plugin that converts mongoose to json
// quizSubmitSchema.plugin(toJSON);
// quizSubmitSchema.plugin(paginate);

// const QuizSubmmit = mongoose.model('QuizSubmit', quizSubmitSchema);

// module.exports = QuizSubmmit;
