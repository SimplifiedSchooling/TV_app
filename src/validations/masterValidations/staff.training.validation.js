const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createTranning = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllTrannings = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getTranning = {
  params: Joi.object().keys({
    traningId: Joi.string().custom(objectId),
  }),
};

const updateTranning = {
  params: Joi.object().keys({
    traningId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteTranning = {
  params: Joi.object().keys({
    traningId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createTranning,
  getAllTrannings,
  getTranning,
  updateTranning,
  deleteTranning,
};
