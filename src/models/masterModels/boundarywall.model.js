const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const boundarywallSchema = mongoose.Schema(
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
boundarywallSchema.plugin(toJSON);
boundarywallSchema.plugin(paginate);

const BoundarywallSchema = mongoose.model('boundarywallSchema', boundarywallSchema);

module.exports = BoundarywallSchema;
