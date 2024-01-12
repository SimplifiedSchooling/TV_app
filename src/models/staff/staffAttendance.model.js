const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const staffAttendanceSchema = mongoose.Schema(
  {
    staffId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Staffs',
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    attedance_type: {
      type: String,
      required: true,
      enum: ['holiday', 'late', 'present', 'absent', 'halfday'],
    },
    remark: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
staffAttendanceSchema.plugin(toJSON);
staffAttendanceSchema.plugin(paginate);

const staffAttendance = mongoose.model('staffAttendance', staffAttendanceSchema);

module.exports = staffAttendance;
