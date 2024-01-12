const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createDistrict = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().custom(objectId),
  }),
};

const getDistrictById = {
  params: Joi.object().keys({
    DistrictId: Joi.string().custom(objectId),
  }),
};

const getDistrictByStateId = {
  params: Joi.object().keys({
    stateId: Joi.string().custom(objectId),
  }),
};

const getAllDistrict = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const updateDistrictTypeyId = {
  params: Joi.object().keys({
    DistrictId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteDistrictTypeById = {
  params: Joi.object().keys({
    DistrictId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDistrict,
  getAllDistrict,
  getDistrictById,
  updateDistrictTypeyId,
  deleteDistrictTypeById,
  getDistrictByStateId,
};
