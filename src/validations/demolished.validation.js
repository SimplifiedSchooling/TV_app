const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createDemolished = {
  body: Joi.object().keys({
    asset: Joi.string().required(),
    totalAsset: Joi.number().required(),
    totalDestroyed: Joi.string().required(),
    reason: Joi.string().required(),
    date: Joi.date().required(),
    file: Joi.string(),
  }),
};

const getAllDemolished = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getDemolishedById = {
  params: Joi.object().keys({
    demolishedId: Joi.string().custom(objectId),
  }),
};

const updateDemolishedById = {
  params: Joi.object().keys({
    demolishedId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      asset: Joi.string().required(),
      totalAsset: Joi.number().required(),
      totalDestroyed: Joi.string().required(),
      reason: Joi.string().required(),
      date: Joi.date().required(),
      file: Joi.string(),
    })
    .min(1),
};

const deleteDemolishedById = {
  params: Joi.object().keys({
    demolishedId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDemolished,
  getAllDemolished,
  getDemolishedById,
  updateDemolishedById,
  deleteDemolishedById,
};
