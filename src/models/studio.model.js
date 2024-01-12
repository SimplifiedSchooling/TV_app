const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const studioSchema = mongoose.Schema(
  {
    studioName: {
      type: String,
      trim: true,
      required: true,
    },
    location: {
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
studioSchema.plugin(toJSON);
studioSchema.plugin(paginate);

const Studio = mongoose.model('Studio', studioSchema);

module.exports = Studio;
