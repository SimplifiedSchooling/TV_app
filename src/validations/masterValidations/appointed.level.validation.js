const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createAppointedLevel = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllAppointedLevels = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getAppointedLevel = {
  params: Joi.object().keys({
    appointedId: Joi.string().custom(objectId),
  }),
};

const updateAppointedLevel = {
  params: Joi.object().keys({
    appointedId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteAppointedLevel = {
  params: Joi.object().keys({
    appointedId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAppointedLevel,
  getAllAppointedLevels,
  getAppointedLevel,
  updateAppointedLevel,
  deleteAppointedLevel,
};
