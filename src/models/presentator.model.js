const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const presentatorSchema = mongoose.Schema(
  {
    presentatorName: {
      type: String,
      trim: true,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
    schoolName: {
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
presentatorSchema.plugin(toJSON);
presentatorSchema.plugin(paginate);

const Presentator = mongoose.model('Presentator', presentatorSchema);

module.exports = Presentator;
