const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');

const grievanceRedressalSchema = mongoose.Schema(
  {
    complainType: {
      type: String,
      required: true,
      trim: true,
    },
    complainBy: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
grievanceRedressalSchema.plugin(toJSON);
grievanceRedressalSchema.plugin(paginate);

const GrievanceRedressal = mongoose.model('GrievanceRedressal', grievanceRedressalSchema);

module.exports = GrievanceRedressal;
