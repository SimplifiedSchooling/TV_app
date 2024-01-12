const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const lectureAttendanceSchema = mongoose.Schema(
  {
    entries: [
      {
        studentId: {
          type: Number,
          required: true,
        },
        attendanceStatus: {
          type: String,
          enum: ['present', 'absent', 'late'],
          default: 'present',
        },
        remark: {
          type: String,
        },
      },
    ],
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    scode: {
      type: String,
      required: true,
    },
    teacherName: {
      type: String,
      required: true,
    },
    lectureId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'TodayPlan',
      required: true,
    },
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Classes',
      required: true,
    },
    sectionId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Section',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
lectureAttendanceSchema.plugin(toJSON);
lectureAttendanceSchema.plugin(paginate);

const LectureAttendance = mongoose.model('lectureAttendance', lectureAttendanceSchema);

module.exports = LectureAttendance;
