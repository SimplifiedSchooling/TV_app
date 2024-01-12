const mongoose = require('mongoose');

const { toJSON } = require('../plugins');

const AppliedForPlacementSchema = mongoose.Schema(
  {
    placementName: {
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
AppliedForPlacementSchema.plugin(toJSON);

const AppliedForPlacement = mongoose.model('AppliedForPlacement', AppliedForPlacementSchema);

module.exports = AppliedForPlacement;
