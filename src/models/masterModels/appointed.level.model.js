const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const appointedForLevelSchema = mongoose.Schema(
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
appointedForLevelSchema.plugin(toJSON);

const Appointed = mongoose.model('appointed', appointedForLevelSchema);

module.exports = Appointed;
