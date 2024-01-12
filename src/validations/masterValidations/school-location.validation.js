const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSchoolLocation = {
  body: Joi.object().keys({
    locationType: Joi.string().required(),
  }),
};

const getSchoolLocationById = {
  params: Joi.object().keys({
    schoolLocationId: Joi.string().custom(objectId),
  }),
};

const getAllSchoolLocation = {
  query: Joi.object().keys({
    locationType: Joi.string(),
  }),
};

const updateSchoolLocationTypeyId = {
  params: Joi.object().keys({
    schoolLocationId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      locationType: Joi.string().required(),
    })
    .min(1),
};
const deleteSchoolLocationTypeById = {
  params: Joi.object().keys({
    schoolLocationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSchoolLocation,
  getAllSchoolLocation,
  getSchoolLocationById,
  updateSchoolLocationTypeyId,
  deleteSchoolLocationTypeById,
};
