const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createresidential = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllresidential = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getresidential = {
  params: Joi.object().keys({
    ResidentialId: Joi.string().custom(objectId),
  }),
};

const updateresidential = {
  params: Joi.object().keys({
    ResidentialId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteresidential = {
  params: Joi.object().keys({
    ResidentialId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createresidential,
  getAllresidential,
  getresidential,
  updateresidential,
  deleteresidential,
};
