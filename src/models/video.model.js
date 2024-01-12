const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    path: {
      type: String,
      required: true,
      trim: true,
    },
    board: {
      type: String,
      trim: true,
    },
    class: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    book: {
      type: String,
      trim: true,
    },
    chapter: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * @typedef Video
 */
const Video = mongoose.model('Video', userSchema);

module.exports = Video;
