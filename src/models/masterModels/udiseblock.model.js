const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const udiseblockSchema = mongoose.Schema(
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
udiseblockSchema.plugin(toJSON);
udiseblockSchema.plugin(paginate);

const UdiseblockSchema = mongoose.model('udiseblock', udiseblockSchema);

module.exports = UdiseblockSchema;
