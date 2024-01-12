const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createTeacherType = {
  body: Joi.object().keys({
    teacherType: Joi.string().required(),
  }),
};

const getAllTeacherType = {
  query: Joi.object().keys({
    TeacherType: Joi.string(),
  }),
};

const getTeacherTypeById = {
  params: Joi.object().keys({
    teacherId: Joi.string().custom(objectId),
  }),
};

const updateTeacherTypeId = {
  params: Joi.object().keys({
    teacherId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      teacherType: Joi.string().required(),
    })
    .min(1),
};
const deleteTeacherTypeById = {
  params: Joi.object().keys({
    teacherId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createTeacherType,
  getAllTeacherType,
  getTeacherTypeById,
  updateTeacherTypeId,
  deleteTeacherTypeById,
};
