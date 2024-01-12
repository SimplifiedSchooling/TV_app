const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const schoolSpecialTraningSchema = mongoose.Schema(
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
schoolSpecialTraningSchema.plugin(toJSON);

const Traning = mongoose.model('specialtraning', schoolSpecialTraningSchema);

module.exports = Traning;
