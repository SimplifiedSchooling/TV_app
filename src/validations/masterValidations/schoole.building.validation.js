const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createBuilding = {
  body: Joi.object().keys({
    buildingName: Joi.string().required(),
  }),
};

const getAllBuildings = {
  query: Joi.object().keys({
    buildingName: Joi.string(),
  }),
};

const getBuilding = {
  params: Joi.object().keys({
    buildingId: Joi.string().custom(objectId),
  }),
};

const updateBuilding = {
  params: Joi.object().keys({
    buildingId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      buildingName: Joi.string().required(),
    })
    .min(1),
};

const deleteBuilding = {
  params: Joi.object().keys({
    buildingId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBuilding,
  getAllBuildings,
  getBuilding,
  updateBuilding,
  deleteBuilding,
};
