const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createDesignation = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllDesignations = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getDesignation = {
  params: Joi.object().keys({
    designationId: Joi.string().custom(objectId),
  }),
};

const updateDesignation = {
  params: Joi.object().keys({
    designationId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteDesignation = {
  params: Joi.object().keys({
    designationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDesignation,
  getAllDesignations,
  getDesignation,
  updateDesignation,
  deleteDesignation,
};
