const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const minorityschoolSchema = mongoose.Schema(
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
minorityschoolSchema.plugin(toJSON);
minorityschoolSchema.plugin(paginate);

const MinorityschoolSchema = mongoose.model('minorityschoolSchema', minorityschoolSchema);

module.exports = MinorityschoolSchema;
