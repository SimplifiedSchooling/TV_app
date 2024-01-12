const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const demolishedSchema = mongoose.Schema(
  // {
  //   reference_no: {
  //     type: Number,
  //     required: true,
  //   },
  //   to_title: {
  //     type: String,
  //     required: true,
  //   },
  //   address: {
  //     type: String,
  //     required: true,
  //   },
  //   note: {
  //     type: String,
  //     required: true,
  //   },
  //   from_title: {
  //     type: String,
  //     required: true,
  //   },
  //   date: {
  //     type: Date,
  //     required: true,
  //   },
  //   imagePath: {
  //     type: String,
  //   },
  //   type: {
  //     type: String,
  //   },
  // },
  {
    asset: {
      type: String,
      trim: true,
    },
    totalAsset: {
      type: Number,
      trim: true,
    },
    totalDestroyed: {
      type: String,
      trim: true,
    },
    reason: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      trim: true,
    },
    imagePath: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
demolishedSchema.plugin(toJSON);
demolishedSchema.plugin(paginate);

const Demolished = mongoose.model('Demolished', demolishedSchema);

module.exports = Demolished;
