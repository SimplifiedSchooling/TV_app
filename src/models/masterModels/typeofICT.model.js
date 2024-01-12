const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const typeOfICTGovSchoolSchema = mongoose.Schema(
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
typeOfICTGovSchoolSchema.plugin(toJSON);
typeOfICTGovSchoolSchema.plugin(paginate);

const typeOfICTGovSchool = mongoose.model('typeofict', typeOfICTGovSchoolSchema);

module.exports = typeOfICTGovSchool;
