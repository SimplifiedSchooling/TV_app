const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const boardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
boardSchema.plugin(toJSON);
boardSchema.plugin(paginate);

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
