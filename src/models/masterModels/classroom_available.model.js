const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const classroomAvailableSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    count: {
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
classroomAvailableSchema.plugin(toJSON);
classroomAvailableSchema.plugin(paginate);

const ClassroomAvailableSchema = mongoose.model('classroomAvailable', classroomAvailableSchema);

module.exports = ClassroomAvailableSchema;
