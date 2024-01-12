const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const staffQualificationSchema = mongoose.Schema(
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
staffQualificationSchema.plugin(toJSON);

const Qualification = mongoose.model('Qualification', staffQualificationSchema);

module.exports = Qualification;
