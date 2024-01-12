const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createappliedForPlacement = {
  body: Joi.object().keys({
    placementName: Joi.string().required(),
  }),
};

const getappliedForPlacementById = {
  params: Joi.object().keys({
    placementId: Joi.string().custom(objectId),
  }),
};

const getAllappliedForPlacement = {
  query: Joi.object().keys({
    placementName: Joi.string(),
  }),
};

const updateappliedForPlacementId = {
  params: Joi.object().keys({
    placementId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      placementName: Joi.string().required(),
    })
    .min(1),
};
const deleteappliedForPlacementById = {
  params: Joi.object().keys({
    placementId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createappliedForPlacement,
  getAllappliedForPlacement,
  getappliedForPlacementById,
  updateappliedForPlacementId,
  deleteappliedForPlacementById,
};
