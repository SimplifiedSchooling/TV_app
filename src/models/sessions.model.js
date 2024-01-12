const mongoose = require('mongoose');

const { toJSON } = require('./plugins');

const sessionsSchema = mongoose.Schema(
  {
    sessionName: {
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
sessionsSchema.plugin(toJSON);

const Sessions = mongoose.model('sessions', sessionsSchema);

module.exports = Sessions;
