const mongoose = require('mongoose');

const { toJSON } = require('../plugins');

const internetTypeSchema = mongoose.Schema(
  {
    internetType: {
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
internetTypeSchema.plugin(toJSON);

const InternetType = mongoose.model('InternetType', internetTypeSchema);

module.exports = InternetType;
