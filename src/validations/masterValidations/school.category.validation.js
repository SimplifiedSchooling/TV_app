const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSchoolCategory = {
  body: Joi.object().keys({
    detailsOfCategory: Joi.string().required(),
    Code: Joi.number().required(),
    broadCategory: Joi.string().required(),
  }),
};

const getSchoolCategoryById = {
  params: Joi.object().keys({
    SchoolCategoryTypeId: Joi.string().custom(objectId),
  }),
};

const getAllSchoolCategory = {
  query: Joi.object().keys({
    detailsOfCategory: Joi.string(),
  }),
};

const updateSchoolCategoryId = {
  params: Joi.object().keys({
    SchoolCategoryTypeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      detailsOfCategory: Joi.string().required(),
      Code: Joi.number().required(),
      broadCategory: Joi.string().required(),
    })
    .min(1),
};
const deleteSchoolCategoryById = {
  params: Joi.object().keys({
    SchoolCategoryTypeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSchoolCategory,
  getAllSchoolCategory,
  getSchoolCategoryById,
  updateSchoolCategoryId,
  deleteSchoolCategoryById,
};
