const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createudiseblock = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAlludiseblock = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getudiseblock = {
  params: Joi.object().keys({
    udiseblockId: Joi.string().custom(objectId),
  }),
};

const updateudiseblock = {
  params: Joi.object().keys({
    udiseblockId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteudiseblock = {
  params: Joi.object().keys({
    udiseblockId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createudiseblock,
  getAlludiseblock,
  getudiseblock,
  updateudiseblock,
  deleteudiseblock,
};
