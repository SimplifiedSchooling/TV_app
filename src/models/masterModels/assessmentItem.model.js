const mongoose = require('mongoose');

const { toJSON } = require('../plugins');

const AssessmentItemSchema = mongoose.Schema(
  {
    assessmentitemName: {
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
AssessmentItemSchema.plugin(toJSON);

const AssessmentItem = mongoose.model('AssessmentItem', AssessmentItemSchema);

module.exports = AssessmentItem;
