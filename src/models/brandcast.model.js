const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const broadcastSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    path: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
broadcastSchema.plugin(toJSON);
broadcastSchema.plugin(paginate);

const Broadcast = mongoose.model('broadcast', broadcastSchema);
module.exports = Broadcast;
