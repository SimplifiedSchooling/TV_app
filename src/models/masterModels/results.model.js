const mongoose = require('mongoose');

const { toJSON } = require('../plugins');

const resultTypeSchema = mongoose.Schema(
  {
    resultType: {
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
resultTypeSchema.plugin(toJSON);

const Result = mongoose.model('Result', resultTypeSchema);

module.exports = Result;
