const mongoose = require('mongoose');

const { toJSON } = require('../plugins');

const laboratoriesSchema = mongoose.Schema(
  {
    laboratoryName: {
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
laboratoriesSchema.plugin(toJSON);

const Laboratories = mongoose.model('Laboratories', laboratoriesSchema);

module.exports = Laboratories;
