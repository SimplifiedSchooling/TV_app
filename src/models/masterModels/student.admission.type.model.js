const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const studentAdmissionTypeSchema = mongoose.Schema(
  {
    type: {
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
studentAdmissionTypeSchema.plugin(toJSON);
studentAdmissionTypeSchema.plugin(paginate);

const Student = mongoose.model('Admission', studentAdmissionTypeSchema);

module.exports = Student;
