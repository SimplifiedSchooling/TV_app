const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const managementAdministrationTypeSchema = mongoose.Schema(
  {
    type: {
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
managementAdministrationTypeSchema.plugin(toJSON);
managementAdministrationTypeSchema.plugin(paginate);

const AdministrationType = mongoose.model('Administrationtype', managementAdministrationTypeSchema);

module.exports = AdministrationType;
