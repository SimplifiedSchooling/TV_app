const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const admitSchema = mongoose.Schema(
  {
    admitType: {
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
admitSchema.plugin(toJSON);

const Admit = mongoose.model('Admit', admitSchema);

module.exports = Admit;
