const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const sectorSchema = mongoose.Schema(
  {
    sector: {
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
sectorSchema.plugin(toJSON);

const Sector = mongoose.model('sector', sectorSchema);

module.exports = Sector;
