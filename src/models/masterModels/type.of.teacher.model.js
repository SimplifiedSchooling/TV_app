const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const typeOfTeacherSchema = mongoose.Schema(
  {
    teacherType: {
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
typeOfTeacherSchema.plugin(toJSON);

const TeacherType = mongoose.model('TeacherType', typeOfTeacherSchema);

module.exports = TeacherType;
