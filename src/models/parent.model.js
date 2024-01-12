const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const parentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobNumber: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
    },
    students: [
      {
        type: String,
      },
    ],
    role: {
      type: String,
      default: 'parent',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
parentSchema.plugin(toJSON);
parentSchema.plugin(paginate);

/**
 * @typedef Parent
 */
const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
