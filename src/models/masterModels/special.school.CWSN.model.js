const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const specialSchoolTypeSchema = mongoose.Schema(
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
specialSchoolTypeSchema.plugin(toJSON);

const Special = mongoose.model('specialschoolcwsn', specialSchoolTypeSchema);

module.exports = Special;
