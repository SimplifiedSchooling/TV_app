const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudio = {
  body: Joi.object().keys({
    studioName: Joi.string().required(),
    location: Joi.string().required(),
  }),
};

const getStudio = {
  params: Joi.object().keys({
    studioId: Joi.string().custom(objectId),
  }),
};

const getAllStudios = {
  query: Joi.object().keys({
    studioName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateStudioById = {
  params: Joi.object().keys({
    studioId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      studioName: Joi.string().required(),
      location: Joi.string().required(),
    })
    .min(2),
};
const deleteStudioById = {
  params: Joi.object().keys({
    studioId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createStudio,
  getStudio,
  getAllStudios,
  updateStudioById,
  deleteStudioById,
};
