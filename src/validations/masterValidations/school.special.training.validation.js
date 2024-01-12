const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSchoolSpecialTraning = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllSchoolSpecialTraning = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const getSchoolSpecialTraningById = {
  params: Joi.object().keys({
    traningId: Joi.string().custom(objectId),
  }),
};

const updateSchoolSpecialTraningId = {
  params: Joi.object().keys({
    traningId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};
const deleteSchoolSpecialTraningById = {
  params: Joi.object().keys({
    traningId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSchoolSpecialTraning,
  getAllSchoolSpecialTraning,
  getSchoolSpecialTraningById,
  updateSchoolSpecialTraningId,
  deleteSchoolSpecialTraningById,
};
