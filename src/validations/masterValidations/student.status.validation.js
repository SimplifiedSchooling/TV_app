const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createStudentStatus = {
  body: Joi.object().keys({
    status: Joi.string().required(),
  }),
};

const getStudentStatusById = {
  params: Joi.object().keys({
    studentStatusId: Joi.string().custom(objectId),
  }),
};

const getAllStudentStatus = {
  query: Joi.object().keys({
    status: Joi.string(),
  }),
};

const updateStudentStatusById = {
  params: Joi.object().keys({
    studentStatusId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      status: Joi.string().required(),
    })
    .min(1),
};
const deleteStudentStatusById = {
  params: Joi.object().keys({
    studentStatusId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createStudentStatus,
  getAllStudentStatus,
  getStudentStatusById,
  updateStudentStatusById,
  deleteStudentStatusById,
};
