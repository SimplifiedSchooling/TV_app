const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const studentSessionSchema = mongoose.Schema(
  {
    sessionId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'sessions',
      required: true,
      trim: true,
    },
    studentId: {
      type: Number,
      required: true,
    },
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Classes',
      trim: true,
    },
    sectionId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Section',
      required: true,
      trim: true,
    },
    scode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
studentSessionSchema.plugin(toJSON);
studentSessionSchema.plugin(paginate);

const StudentSession = mongoose.model('StudentSession', studentSessionSchema);

module.exports = StudentSession;
