const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const languageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    code: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
languageSchema.plugin(toJSON);
languageSchema.plugin(paginate);

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;
