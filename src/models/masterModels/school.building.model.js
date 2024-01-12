const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const schoolBuildingSchema = mongoose.Schema(
  {
    buildingName: {
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
schoolBuildingSchema.plugin(toJSON);
schoolBuildingSchema.plugin(paginate);

const Building = mongoose.model('Building', schoolBuildingSchema);

module.exports = Building;
