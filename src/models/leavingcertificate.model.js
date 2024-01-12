const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const leavingCertSchema = mongoose.Schema(
  {
    admissionNo: {
      type: String,
    },
    apllyedName: {
      type: String,
      trim: true,
      required: true,
    },
    scode: {
      type: String,
    },
    StudentId: {
      type: String,
    },
    date: {
      type: Date,
    },
    status: {
      type: Boolean,
      default: true,
    },
    certificate: {
      type: String,
    },
    classId: {
      type: String,
    },
    sectionId: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
leavingCertSchema.plugin(toJSON);
leavingCertSchema.plugin(paginate);

const LeavingCert = mongoose.model('LeavingCert', leavingCertSchema);

module.exports = LeavingCert;
