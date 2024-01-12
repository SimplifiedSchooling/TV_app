const mongoose = require('mongoose');

const { toJSON } = require('../plugins');

const specialEducatorSchema = mongoose.Schema(
  {
    specialEducator: {
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
specialEducatorSchema.plugin(toJSON);

const SpecialEducatorSchema = mongoose.model('SpecialEducator', specialEducatorSchema);

module.exports = SpecialEducatorSchema;
