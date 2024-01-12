const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createClassTeacher = {
  body: Joi.object().keys({
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
    teacherId: Joi.string().required(),
  }),
};

const getClassTeacher = {
  params: Joi.object().keys({
    classteacherId: Joi.string().custom(objectId).required(),
  }),
};

const getAllStudentByclassTeacherId = {
  query: Joi.object().keys({
    teacherId: Joi.string().required(),
  }),
};

const getAttendenceList = {
  query: Joi.object().keys({
    teacherId: Joi.string().required(),
    date: Joi.string().required(),
  }),
};

const getTotalCounts = {
  query: Joi.object().keys({
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
  }),
};

const getClassTeachersByBookId = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId).required(),
  }),
};

const getClassTeachersByTeacherId = {
  params: Joi.object().keys({
    teacherId: Joi.string().custom(objectId).required(),
  }),
};

const getClassTeachersByFilter = {
  params: Joi.object().keys({
    classId: Joi.string(),
    sectionId: Joi.string(),
    teacherId: Joi.string(),
  }),
};

const getAllClassTeacher = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateClassTeacherById = {
  params: Joi.object().keys({
    classteacherId: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      classId: Joi.string(),
      sectionId: Joi.string(),
      teacherId: Joi.string(),
    })
    .min(1),
};
const deleteClassTeacherById = {
  params: Joi.object().keys({
    classteacherId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createClassTeacher,
  getClassTeacher,
  getAllClassTeacher,
  updateClassTeacherById,
  deleteClassTeacherById,
  getClassTeachersByBookId,
  getClassTeachersByFilter,
  getAllStudentByclassTeacherId,
  getAttendenceList,
  getClassTeachersByTeacherId,
  getTotalCounts,
};
