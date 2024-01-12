const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const boardingresidentialschoolSchema = mongoose.Schema(
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
boardingresidentialschoolSchema.plugin(toJSON);
boardingresidentialschoolSchema.plugin(paginate);

const BoardingresidentialschoolSchema = mongoose.model('boardingresidentialschool', boardingresidentialschoolSchema);

module.exports = BoardingresidentialschoolSchema;
