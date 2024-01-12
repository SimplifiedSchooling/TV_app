const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSpecial = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllSpecials = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getSpecial = {
  params: Joi.object().keys({
    specialId: Joi.string().custom(objectId),
  }),
};

const updateSpecial = {
  params: Joi.object().keys({
    specialId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteSpecial = {
  params: Joi.object().keys({
    specialId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSpecial,
  getAllSpecials,
  getSpecial,
  updateSpecial,
  deleteSpecial,
};
