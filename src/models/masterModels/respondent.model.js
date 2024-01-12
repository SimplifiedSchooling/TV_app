const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const respondentSchema = mongoose.Schema(
  {
    type: {
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
respondentSchema.plugin(toJSON);
respondentSchema.plugin(paginate);

const Respondent = mongoose.model('Respondent', respondentSchema);

module.exports = Respondent;
