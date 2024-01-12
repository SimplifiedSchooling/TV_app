const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const safetyAndSecuritySchema = mongoose.Schema(
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
safetyAndSecuritySchema.plugin(toJSON);

const SafetyAndSecurity = mongoose.model('SafetyAndSecurity', safetyAndSecuritySchema);

module.exports = SafetyAndSecurity;
