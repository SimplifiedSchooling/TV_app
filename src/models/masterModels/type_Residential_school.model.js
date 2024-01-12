const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const typeresidentialschoolSchema = mongoose.Schema(
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
typeresidentialschoolSchema.plugin(toJSON);
typeresidentialschoolSchema.plugin(paginate);

const TyperesidentialschoolSchema = mongoose.model('typeresidentialschool', typeresidentialschoolSchema);

module.exports = TyperesidentialschoolSchema;
