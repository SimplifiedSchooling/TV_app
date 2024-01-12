const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const mediumSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
mediumSchema.plugin(toJSON);
mediumSchema.plugin(paginate);

const medium = mongoose.model('Medium', mediumSchema);

module.exports = medium;
