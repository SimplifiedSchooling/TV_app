const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');

const studentLeftReasionSchema = mongoose.Schema(
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
studentLeftReasionSchema.plugin(toJSON);
studentLeftReasionSchema.plugin(paginate);

const Studentleft = mongoose.model('studentLeftReasionSchema', studentLeftReasionSchema);

module.exports = Studentleft;
