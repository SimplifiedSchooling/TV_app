const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const typeOfhostelSchema = mongoose.Schema(
  {
    hostelType: {
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
typeOfhostelSchema.plugin(toJSON);

const Typeofhostel = mongoose.model('Typeofhostel', typeOfhostelSchema);

module.exports = Typeofhostel;
