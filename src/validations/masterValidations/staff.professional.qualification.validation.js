const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createStaffQualification = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllStaffQualifications = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getStaffQualification = {
  params: Joi.object().keys({
    qualificationId: Joi.string().custom(objectId),
  }),
};

const updateStaffQualification = {
  params: Joi.object().keys({
    qualificationId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const deleteStaffQualification = {
  params: Joi.object().keys({
    qualificationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createStaffQualification,
  getAllStaffQualifications,
  getStaffQualification,
  updateStaffQualification,
  deleteStaffQualification,
};
