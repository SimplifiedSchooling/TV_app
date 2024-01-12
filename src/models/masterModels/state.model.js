const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const stateSchema = mongoose.Schema(
  {
    stateName: {
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
stateSchema.plugin(toJSON);

const State = mongoose.model('state', stateSchema);

module.exports = State;
