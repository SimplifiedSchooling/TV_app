const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createminority = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllminority = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getminority = {
  params: Joi.object().keys({
    minorityId: Joi.string().custom(objectId),
  }),
};

const updateminority = {
  params: Joi.object().keys({
    minorityId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteminority = {
  params: Joi.object().keys({
    minorityId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createminority,
  getAllminority,
  getminority,
  updateminority,
  deleteminority,
};
