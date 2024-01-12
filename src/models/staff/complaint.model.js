const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const complaintSchema = mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
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
complaintSchema.plugin(toJSON);
complaintSchema.plugin(paginate);

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
