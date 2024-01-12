const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createState = {
  body: Joi.object().keys({
    stateName: Joi.string().required(),
  }),
};

const getAllStates = {
  query: Joi.object().keys({
    stateName: Joi.string(),
  }),
};

const getState = {
  params: Joi.object().keys({
    stateId: Joi.string().custom(objectId),
  }),
};

const updateState = {
  params: Joi.object().keys({
    stateId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      stateName: Joi.string().required(),
    })
    .min(1),
};

const deleteState = {
  params: Joi.object().keys({
    stateId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createState,
  getAllStates,
  getState,
  updateState,
  deleteState,
};
