const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createResultType = {
  body: Joi.object().keys({
    resultType: Joi.string().required(),
  }),
};

const getResultTypeById = {
  params: Joi.object().keys({
    resultTypeId: Joi.string().custom(objectId),
  }),
};

const getAllResultType = {
  query: Joi.object().keys({
    resultType: Joi.string(),
  }),
};

const updateResultTypeId = {
  params: Joi.object().keys({
    resultTypeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      resultType: Joi.string().required(),
    })
    .min(1),
};
const deleteResultTypeById = {
  params: Joi.object().keys({
    resultTypeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createResultType,
  getAllResultType,
  getResultTypeById,
  updateResultTypeId,
  deleteResultTypeById,
};
