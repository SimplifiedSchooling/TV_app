const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const managementGroupSchoolSchema = mongoose.Schema(
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
managementGroupSchoolSchema.plugin(toJSON);
managementGroupSchoolSchema.plugin(paginate);

const Schoolmanagment = mongoose.model('Managementgroup', managementGroupSchoolSchema);

module.exports = Schoolmanagment;
