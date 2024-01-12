const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSession = {
  body: Joi.object().keys({
    sessionName: Joi.string().required(),
  }),
};

const getSessionById = {
  params: Joi.object().keys({
    sessionId: Joi.string().custom(objectId),
  }),
};

const getAllSession = {
  query: Joi.object().keys({
    sessionName: Joi.string(),
  }),
};

const updateSessionId = {
  params: Joi.object().keys({
    sessionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      sessionName: Joi.string().required(),
    })
    .min(1),
};
const deleteSessionById = {
  params: Joi.object().keys({
    sessionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSession,
  getAllSession,
  getSessionById,
  updateSessionId,
  deleteSessionById,
};
