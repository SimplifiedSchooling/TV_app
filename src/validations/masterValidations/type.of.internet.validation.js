const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createInternetType = {
  body: Joi.object().keys({
    internetType: Joi.string().required(),
  }),
};

const getInternetTypeById = {
  params: Joi.object().keys({
    internetTypeId: Joi.string().custom(objectId),
  }),
};

const getAllInternetType = {
  query: Joi.object().keys({
    internetType: Joi.string(),
  }),
};

const updateInternetTypeId = {
  params: Joi.object().keys({
    internetTypeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      internetType: Joi.string().required(),
    })
    .min(1),
};
const deleteInternetTypeById = {
  params: Joi.object().keys({
    internetTypeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createInternetType,
  getAllInternetType,
  getInternetTypeById,
  updateInternetTypeId,
  deleteInternetTypeById,
};
