const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const studentTypeSchema = mongoose.Schema(
  {
    type: {
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
studentTypeSchema.plugin(toJSON);
studentTypeSchema.plugin(paginate);

const studenttype = mongoose.model('studenttype', studentTypeSchema);

module.exports = studenttype;
