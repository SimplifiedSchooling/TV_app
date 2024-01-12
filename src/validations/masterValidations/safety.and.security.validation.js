const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSafetyAndSecurity = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getSafetyAndSecurityById = {
  params: Joi.object().keys({
    safetyAndSecurityId: Joi.string().custom(objectId),
  }),
};

const getAllSafetyAndSecurity = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const updateSafetyAndSecurityId = {
  params: Joi.object().keys({
    safetyAndSecurityId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};
const deleteSafetyAndSecurityById = {
  params: Joi.object().keys({
    safetyAndSecurityId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSafetyAndSecurity,
  getAllSafetyAndSecurity,
  getSafetyAndSecurityById,
  updateSafetyAndSecurityId,
  deleteSafetyAndSecurityById,
};
