const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const academicStreamSchema = mongoose.Schema(
  {
    streamName: {
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
academicStreamSchema.plugin(toJSON);

const Academics = mongoose.model('Academics', academicStreamSchema);

module.exports = Academics;
