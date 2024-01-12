const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const staffDisabilitySchema = mongoose.Schema(
  {
    name: {
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
staffDisabilitySchema.plugin(toJSON);

const Disability = mongoose.model('staffdisability', staffDisabilitySchema);

module.exports = Disability;
