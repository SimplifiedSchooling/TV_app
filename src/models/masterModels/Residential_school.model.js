const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const residentialschoolSchema = mongoose.Schema(
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
residentialschoolSchema.plugin(toJSON);
residentialschoolSchema.plugin(paginate);

const Residentialschool = mongoose.model('residentialschool', residentialschoolSchema);

module.exports = Residentialschool;
