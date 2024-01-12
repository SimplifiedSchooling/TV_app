const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createRespondent = {
  body: Joi.object().keys({
    type: Joi.string().required(),
  }),
};

const getAllRespondents = {
  query: Joi.object().keys({
    type: Joi.string(),
  }),
};

const getRespondent = {
  params: Joi.object().keys({
    respondentId: Joi.string().custom(objectId),
  }),
};

const updateRespondent = {
  params: Joi.object().keys({
    respondentId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      type: Joi.string().required(),
    })
    .min(1),
};

const deleteRespondent = {
  params: Joi.object().keys({
    respondentId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createRespondent,
  getAllRespondents,
  getRespondent,
  updateRespondent,
  deleteRespondent,
};
