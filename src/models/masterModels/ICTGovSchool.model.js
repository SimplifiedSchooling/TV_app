const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const ictGovImplementSchoolSchema = mongoose.Schema(
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
ictGovImplementSchoolSchema.plugin(toJSON);
ictGovImplementSchoolSchema.plugin(paginate);

const ICTGovSchool = mongoose.model('ICTGovSchool', ictGovImplementSchoolSchema);

module.exports = ICTGovSchool;
