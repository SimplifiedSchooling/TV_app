const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const staffAttendanceSchema = mongoose.Schema(
  {
    entries: [
      {
        employee_id: {
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
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
staffAttendanceSchema.plugin(toJSON);
staffAttendanceSchema.plugin(paginate);

const StaffAttendanceSchema = mongoose.model('StaffAttendanceSchema', staffAttendanceSchema);

module.exports = StaffAttendanceSchema;
