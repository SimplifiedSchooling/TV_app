const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const classTeacherAssignSchema = mongoose.Schema(
  {
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Classes',
      required: true,
    },
    sectionId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Section',
      required: true,
    },
    teacherId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Staffs',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
classTeacherAssignSchema.plugin(toJSON);
classTeacherAssignSchema.plugin(paginate);

const ClassTeacher = mongoose.model('ClassTeacher', classTeacherAssignSchema);

module.exports = ClassTeacher;
