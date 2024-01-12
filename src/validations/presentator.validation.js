const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPresentator = {
  body: Joi.object().keys({
    presentatorName: Joi.string().required(),
    qualification: Joi.string().required(),
    experience: Joi.string().required(),
    schoolName: Joi.string().required(),
  }),
};

const getPresentator = {
  params: Joi.object().keys({
    presentatorId: Joi.string().custom(objectId),
  }),
};

const getAllPresentator = {
  query: Joi.object().keys({
    presentatorName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updatePresentatorById = {
  params: Joi.object().keys({
    presentatorId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      presentatorName: Joi.string().required(),
      qualification: Joi.string().required(),
      experience: Joi.string().required(),
      schoolName: Joi.string().required(),
    })
    .min(2),
};
const deletePresentatorById = {
  params: Joi.object().keys({
    presentatorId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPresentator,
  getPresentator,
  getAllPresentator,
  updatePresentatorById,
  deletePresentatorById,
};
