const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const attendanceVerifySchema = mongoose.Schema(
  {
    file: {
      type: String,
    },
    studentId1: {
      type: String,
    },
    studentId2: {
      type: String,
      trim: true,
    },
    studentId3: {
      type: String,
      trim: true,
    },
    campusId: {
      type: String,
      trim: true,
    },
    inchargeId: {
      type: String,
      trim: true,
    },
    backCount: {
      type: String,
    },
    date: {
      type: String,
    },
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Classes',
      required: true,
      trim: true,
    },
    sectionId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Section',
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
attendanceVerifySchema.plugin(toJSON);
attendanceVerifySchema.plugin(paginate);

const AttendanceVerify = mongoose.model('AttendanceVerify', attendanceVerifySchema);

module.exports = AttendanceVerify;
