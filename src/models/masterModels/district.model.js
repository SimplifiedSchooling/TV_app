const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const districtSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    stateId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'state',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
districtSchema.plugin(toJSON);

const District = mongoose.model('District', districtSchema);

module.exports = District;
