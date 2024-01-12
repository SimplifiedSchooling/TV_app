const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createAssessmentItem = {
  body: Joi.object().keys({
    assessmentitemName: Joi.string().required(),
  }),
};

const getAssessmentItemById = {
  params: Joi.object().keys({
    assessmentitemId: Joi.string().custom(objectId),
  }),
};

const getAllAssessmentItem = {
  query: Joi.object().keys({
    assessmentitemName: Joi.string(),
  }),
};

const updateAssessmentItemId = {
  params: Joi.object().keys({
    assessmentitemId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      assessmentitemName: Joi.string().required(),
    })
    .min(1),
};
const deleteAssessmentItemById = {
  params: Joi.object().keys({
    assessmentitemId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAssessmentItem,
  getAllAssessmentItem,
  getAssessmentItemById,
  updateAssessmentItemId,
  deleteAssessmentItemById,
};
