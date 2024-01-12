const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createboundarywall = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllboundarywall = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getboundarywall = {
  params: Joi.object().keys({
    boundarywallId: Joi.string().custom(objectId),
  }),
};

const updateboundarywall = {
  params: Joi.object().keys({
    boundarywallId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteboundarywall = {
  params: Joi.object().keys({
    boundarywallId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createboundarywall,
  getAllboundarywall,
  getboundarywall,
  updateboundarywall,
  deleteboundarywall,
};
