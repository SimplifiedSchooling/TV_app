const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudentLeftReason = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const queryStudentLeftReason = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getStudentLeftReason = {
  params: Joi.object().keys({
    studentleftId: Joi.string().custom(objectId),
  }),
};

const updateStudentLeftReason = {
  params: Joi.object().keys({
    studentleftId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteStudentLeftReason = {
  params: Joi.object().keys({
    studentleftId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createStudentLeftReason,
  queryStudentLeftReason,
  getStudentLeftReason,
  updateStudentLeftReason,
  deleteStudentLeftReason,
};
