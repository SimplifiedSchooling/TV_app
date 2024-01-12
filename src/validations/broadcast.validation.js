const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBroadcast = {
  body: Joi.object().keys({
    title: Joi.string(),
    path: Joi.string(),
  }),
};

const getBroadcasts = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getBroadcast = {
  params: Joi.object().keys({
    broadcastId: Joi.string().custom(objectId),
  }),
};

const updateBroadcast = {
  params: Joi.object().keys({
    broadcastId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      path: Joi.string(),
    })
    .min(1),
};

const deleteBroadcast = {
  params: Joi.object().keys({
    broadcastId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBroadcast,
  getBroadcasts,
  getBroadcast,
  updateBroadcast,
  deleteBroadcast,
};
