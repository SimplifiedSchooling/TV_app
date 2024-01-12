const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const studentStatusSchema = mongoose.Schema(
  {
    status: {
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
studentStatusSchema.plugin(toJSON);

const StudentStatus = mongoose.model('StudentStatus', studentStatusSchema);

module.exports = StudentStatus;
