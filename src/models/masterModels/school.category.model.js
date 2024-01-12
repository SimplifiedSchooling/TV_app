const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const schoolCategorySchema = mongoose.Schema(
  {
    detailsOfCategory: {
      type: String,
      required: true,
      trim: true,
    },
    Code: {
      type: Number,
      required: true,
      trim: true,
    },
    broadCategory: {
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
schoolCategorySchema.plugin(toJSON);

const SchoolCategory = mongoose.model('SchoolCategory', schoolCategorySchema);

module.exports = SchoolCategory;
