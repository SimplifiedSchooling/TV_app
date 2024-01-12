const mongoose = require('mongoose');

const { toJSON } = require('../plugins');

const schoolLocationSchema = mongoose.Schema(
  {
    locationType: {
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
schoolLocationSchema.plugin(toJSON);

const SchoolLocationType = mongoose.model('SchoolLocationType', schoolLocationSchema);

module.exports = SchoolLocationType;
