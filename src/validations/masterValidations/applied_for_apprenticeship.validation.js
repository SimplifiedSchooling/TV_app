const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createappliedForApprenticeship = {
  body: Joi.object().keys({
    apprenticeshipName: Joi.string().required(),
  }),
};

const getappliedForApprenticeshipById = {
  params: Joi.object().keys({
    apprenticeshipId: Joi.string().custom(objectId),
  }),
};

const getAllappliedForApprenticeship = {
  query: Joi.object().keys({
    apprenticeshipName: Joi.string(),
  }),
};

const updateappliedForApprenticeshipId = {
  params: Joi.object().keys({
    apprenticeshipId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      apprenticeshipName: Joi.string().required(),
    })
    .min(1),
};
const deleteappliedForApprenticeshipById = {
  params: Joi.object().keys({
    apprenticeshipId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createappliedForApprenticeship,
  getAllappliedForApprenticeship,
  getappliedForApprenticeshipById,
  updateappliedForApprenticeshipId,
  deleteappliedForApprenticeshipById,
};
