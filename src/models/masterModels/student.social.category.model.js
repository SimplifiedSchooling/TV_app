const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const studentCategorySchema = mongoose.Schema(
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
studentCategorySchema.plugin(toJSON);
studentCategorySchema.plugin(paginate);

const studentcategory = mongoose.model('studentcategory', studentCategorySchema);

module.exports = studentcategory;
