const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const todayPlanSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    board: {
      type: String,
    },
    medium: {
      type: String,
    },
    class: {
      type: String,
    },
    subject: {
      type: String,
    },
    book: {
      type: String,
    },
    chapter: {
      type: String,
    },
    order: {
      type: String,
      required: true,
      trim: true,
    },
    studioName: {
      type: String,
      required: true,
      trim: true,
    },
    liveStreamingPath: {
      type: String,
      trim: true,
    },
    presenterName: {
      type: String,
      trim: true,
    },
    questions: {
      type: [String],
      default: [],
      trim: true,
    },
    videoPath: {
      type: String,
    },
    poster: {
      type: String,
    },
    thumpnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
todayPlanSchema.plugin(toJSON);
todayPlanSchema.plugin(paginate);

/**
 * @typedef TodayPlan
 */
const TodayPlan = mongoose.model('TodayPlan', todayPlanSchema);

module.exports = TodayPlan;
