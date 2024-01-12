const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section3ASchema = mongoose.Schema(
  {
    applydate: {
      type: Date,
      default: Date.now,
    },
    fromdate: {
      type: String,
      trim: true,
    },
    todate: {
      type: String,
      trim: true,
    },
    totaldays: {
      type: String,
      trim: true,
    },
    reason: {
      type: String,
      trim: true,
    },
    files: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
section3ASchema.plugin(toJSON);
section3ASchema.plugin(paginate);

const Leave = mongoose.model('leave', section3ASchema);

module.exports = Leave;
