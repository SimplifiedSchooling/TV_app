const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const staffDesignationSchema = mongoose.Schema(
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
staffDesignationSchema.plugin(toJSON);

const Designation = mongoose.model('Designation', staffDesignationSchema);

module.exports = Designation;
