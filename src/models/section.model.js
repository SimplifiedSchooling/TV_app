const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const sectionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sectionSchema.plugin(toJSON);
sectionSchema.plugin(paginate);

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
