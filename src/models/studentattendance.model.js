const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

// const StudentAttendanceSchema = mongoose.Schema(
//   {
//     classId: {
//       type: mongoose.SchemaTypes.ObjectId,
//       ref: 'Classes',
//       required: true,
//       trim: true,
//     },
//     sectionId: {
//       type: mongoose.SchemaTypes.ObjectId,
//       ref: 'Section',
//       required: true,
//       trim: true,
//     },
//     studentId: {
//       type: mongoose.SchemaTypes.ObjectId,
//       ref: 'Students',
//       required: true,
//       trim: true,
//     },
//     date: {
//       type: String,
//       required: true,
//     },
//     attendancetype: {
//       type: String,
//       enum: ['present', 'absent', 'halfday', 'holiday'],
//       required: true,
//       default: 'present',
//     },
//     remark: {
//       type: String,
//       required: true,
//     },
//     scode: {
//       type: String,
//       required: true,
//     },
//     attedanceTakenBy: {
//       type: mongoose.SchemaTypes.ObjectId,
//       ref: 'Staffs',
//       required: true,
//       trim: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const StudentAttendanceSchema = mongoose.Schema(
//   {
//     studentId: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     date: {
//       type: String,
//       required: true,
//     },
//     time: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// // add plugin that converts mongoose to json
// StudentAttendanceSchema.plugin(toJSON);
// StudentAttendanceSchema.plugin(paginate);

// const StudentAttendance = mongoose.model('StudentAttendance', StudentAttendanceSchema);

// module.exports = StudentAttendance;

// const StudentAttendanceSchema = mongoose.Schema(
//   {
//     studentId: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     date: {
//       type: String,
//       required: true,
//     },
//     time: {
//       type: String,
//       required: true,
//     },
//     AttendenceStatus: {
//       type: String,
//       enum: ['present', 'absent', 'late'],
//       default: 'present',
//     },
//     remark: {
//       type: String,
//     },
//     scode: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // add plugin that converts mongoose to json
// StudentAttendanceSchema.plugin(toJSON);
// StudentAttendanceSchema.plugin(paginate);

// const StudentAttendance = mongoose.model('StudentAttendance', StudentAttendanceSchema);

// module.exports = StudentAttendance;

const StudentAttendanceSchema = mongoose.Schema(
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
StudentAttendanceSchema.plugin(toJSON);
StudentAttendanceSchema.plugin(paginate);

const StudentAttendance = mongoose.model('StudentAttendance', StudentAttendanceSchema);

module.exports = StudentAttendance;
