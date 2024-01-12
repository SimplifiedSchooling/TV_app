const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createStaffDisability = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllStaffDisabilitys = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getStaffDisability = {
  params: Joi.object().keys({
    disabilityId: Joi.string().custom(objectId),
  }),
};

const updateStaffDisability = {
  params: Joi.object().keys({
    disabilityId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteStaffDisability = {
  params: Joi.object().keys({
    disabilityId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createStaffDisability,
  getAllStaffDisabilitys,
  getStaffDisability,
  updateStaffDisability,
  deleteStaffDisability,
};
