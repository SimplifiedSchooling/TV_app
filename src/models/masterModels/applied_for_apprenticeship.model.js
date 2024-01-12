const mongoose = require('mongoose');

const { toJSON } = require('../plugins');

const AppliedForApprenticeshipSchema = mongoose.Schema(
  {
    apprenticeshipName: {
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
AppliedForApprenticeshipSchema.plugin(toJSON);

const AppliedForApprenticeship = mongoose.model('AppliedForApprenticeship', AppliedForApprenticeshipSchema);

module.exports = AppliedForApprenticeship;
