const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createStudent = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllStudents = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getStudent = {
  params: Joi.object().keys({
    studentId: Joi.string().custom(objectId),
  }),
};

const updateStudent = {
  params: Joi.object().keys({
    studentId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteStudent = {
  params: Joi.object().keys({
    studentId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
