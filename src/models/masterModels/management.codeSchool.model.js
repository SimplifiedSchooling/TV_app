const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const code101Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: Number,
      required: true,
      trim: true,
    },
    group: {
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
code101Schema.plugin(toJSON);
code101Schema.plugin(paginate);

const Schoolmanagment = mongoose.model('Managementcode', code101Schema);

module.exports = Schoolmanagment;
