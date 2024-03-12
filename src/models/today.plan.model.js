/* eslint-disable prettier/prettier */
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
    // status: {
    //   type: String,
    //   trim: true,
    //   default: 'active',
    // },
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
    }
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
