const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const staffTranningSchema = mongoose.Schema(
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
staffTranningSchema.plugin(toJSON);

const Tranning = mongoose.model('stafftranning', staffTranningSchema);

module.exports = Tranning;
