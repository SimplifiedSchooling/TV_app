const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const hostelSchema = mongoose.Schema(
  {
    hostelName: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    intake: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
hostelSchema.plugin(toJSON);
hostelSchema.plugin(paginate);

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;
