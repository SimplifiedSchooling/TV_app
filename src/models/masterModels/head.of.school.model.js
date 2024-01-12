const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const inChargeTypeSchema = mongoose.Schema(
  {
    inChargeType: {
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
inChargeTypeSchema.plugin(toJSON);

const InChargeType = mongoose.model('InChargeType', inChargeTypeSchema);

module.exports = InChargeType;
